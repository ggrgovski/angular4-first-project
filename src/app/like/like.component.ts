import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('isLiked') isLiked: boolean;

  onClick(){
    this.isLiked = !this.isLiked;
    this.likesCount += (this.isLiked) ? 1 : -1;
  }

}
