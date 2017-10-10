import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(
    backend: MockBackend, 
    options: BaseRequestOptions,
    realBackend: XHRBackend) {
  
  // // Non-Admin Token
  // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikdqb3JnamkgR3Jnb3Zza2kiLCJhZG1pbiI6ZmFsc2V9.IoIu0ACoO6bOogB-3pABqI8CejNLDWtX_bt658lSwsU';

  // Admin Token
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikdqb3JnamkgR3Jnb3Zza2kiLCJhZG1pbiI6dHJ1ZX0.W4k0l1SJhcJQkALAYBP03wLeHvhvhalrrnkPAjXunew';
    
  backend.connections
  .subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an 
    // asynchronous call to the server that takes 1 second. 
    
    //
    // Fake implementation of /api/authenticate
    //
    if (connection.request.url.endsWith('/api/authenticate') &&
      connection.request.method === RequestMethod.Post) {
      setTimeout(() => {
        let body = JSON.parse(connection.request.getBody());

        if (body.email === 'ggrgovski@gmail.com' && body.password === '1234') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token }
          })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }, 1000);
    }



    // 
    // Fake implementation of /api/orders
    //
    else if (connection.request.url.endsWith('/api/orders') && 
        connection.request.method === RequestMethod.Get) {
      setTimeout(() => {
        if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
              connection.mockRespond(new Response(
                new ResponseOptions({ status: 200, body: [1, 2, 3] })
          ));
        } 
        else {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 401 })
            ));
        }
      }, 1000);
    }
    
    
    
    else{
      
      // pass through any requests not handled above
      let realHttp = new Http(realBackend, options);
      let requestOptions = new RequestOptions({
          method: connection.request.method,
          headers: connection.request.headers,
          body: connection.request.getBody(),
          url: connection.request.url,
          withCredentials: connection.request.withCredentials,
          responseType: connection.request.responseType
      });
      realHttp.request(connection.request.url, requestOptions)
          .subscribe((response: Response) => {
              connection.mockRespond(response);
          },
          (error: any) => {
              connection.mockError(error);
          });
    }

  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};