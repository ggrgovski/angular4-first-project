import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  //,inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite = false;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFavoriteClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue:this.isFavorite});
  }

}



export interface FavoriteChangedEventArgs{
  newValue: boolean
}
