import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Comment } from "../../models/comments.model";

@Component({
  selector: 'page-comment-details',
  templateUrl: 'comment-details.html',
})

export class CommentDetailsPage {

  comment: Comment;
  commentObservable: FirebaseObjectObservable<any>;
  comments: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {

    this.comments = af.database.list('/comments');

    const commentId = navParams.get('commentID');
    
      if(commentId){
        this.commentObservable = af.database.object('/comments/' + commentId, { preserveSnapshot: true });
          this.commentObservable.subscribe(snapshot => {
          this.comment = {
              id: snapshot.key,
              name: snapshot.val().name,
              comment: snapshot.val().comment,
              date: snapshot.val().date
            }; 
          });
      }
      else{
      this.comment = {
          name: "",
          comment: "",
          date: ""
        };   
      }
    }
  
  onSave(comment) {
    if(comment.id){
    this.commentObservable.update({ name: comment.name, comment: comment.comment});
  }
  else{
    this.comments.push(this.comment);
  }
    this.navCtrl.pop();
  }

}