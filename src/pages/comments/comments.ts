import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { CommentDetailsPage } from '../comment-details/comment-details';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  //comments: Comment[];
  comments: FirebaseListObservable<any>;
  shareEmail:string = "lawrenceqmartin@gmail.com";

  constructor(private navCtrl: NavController, private navParams: NavParams, af: AngularFire) {

    this.comments = af.database.list('/comments');
    console.log(this.comments);
  } 

  onCommentPress(commentID: String){
    this.navCtrl.push(CommentDetailsPage, {commentID: commentID});
  };

  onAddClick(comment: Comment){
    this.navCtrl.push(CommentDetailsPage);
  };

  onTrashClick(key: string){
    this.comments.remove(key);
  };

}


