import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from './favorite/favorite.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  root = {
    isFavorite: true
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 10
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log((eventArgs.newValue) ? 'Favorite' : 'Non-Favorite');
  }
}
