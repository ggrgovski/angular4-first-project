import { FavoriteChangedEventArgs } from './../favorite/favorite.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    { year: 2017, month: 1 },
    { year: 2017, month: 2 },
    { year: 2017, month: 3 }
  ]
  constructor() { }

  ngOnInit() {
  }


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
