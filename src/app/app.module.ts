import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseFormatComponent } from './title-case-format/title-case-format.component';
import { TitleCaseFormatPipe } from './title-case-format.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component'
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';


import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
// import { NgbDropdown, NgbDropdownToggle } from './navbar/dropdown';
import { NgbDropdown } from './navbar/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCaseFormatComponent,
    TitleCaseFormatPipe,
    BootstrapPanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NgbDropdown,
    // NgbDropdownToggle,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'archive/:year/:month', 
        component: ArchiveComponent 
      },
      {
        path: 'followers/:id/:username', 
        component: GithubProfileComponent 
      },
      { 
        path: 'followers', 
        component: GithubFollowersComponent 
      },
      { 
        path: 'posts', 
        component: PostsComponent 
      },
      { 
        path: 'courses', 
        component: CoursesComponent 
      },
      { 
        path: 'authors', 
        component: AuthorsComponent 
      },
      { 
        path: 'titleCaseFormat', 
        component: TitleCaseFormatComponent 
      },
      // { 
      //   path: 'changePassword', 
      //   component: ChangePasswordComponent 
      // },
      { 
        path: 'contactForm', 
        component: ContactFormComponent 
      },
      { 
        path: 'courseForm', 
        component: CourseComponent 
      },
      { 
        path: 'signupForm', 
        component: SignupFormComponent 
      },
      { 
        path: 'newCourseForm', 
        component: NewCourseFormComponent 
      },
      { 
        path: 'changePasswordForm', 
        component: ChangePasswordFormComponent 
      },
      { 
        path: '**', 
        component: NotFoundComponent 
      }
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
