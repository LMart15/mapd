import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-professors',
  templateUrl: 'professors.html',
})
export class ProfessorsPage {

  professors: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire, private socialSharing: SocialSharing) {

    this.professors = af.database.list('/professors');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Professors');
  }

onEmailProf(profEmail: string){
    
      this.socialSharing.canShareViaEmail().then(() => {
        // Sharing via email is possible
          
      }).catch(() => {
        // Sharing via email is not possible
        alert("no email");
      });

// Share via email
this.socialSharing. shareViaEmail(null, null, [profEmail]).then(() => {
  // Success!
}).catch(() => {
  // Error!
});

  };
  }
