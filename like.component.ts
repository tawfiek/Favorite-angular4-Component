import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('isLiked') isLiked= false ;
  @Input('likeCount') likeCount= 0 ; 
  
  clicked(){
  this.isLiked = !this.isLiked; 
  this.likeCount += this.isLiked? +1 : -1 ; 
  }

}
