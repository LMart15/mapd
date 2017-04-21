import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-professors',
  templateUrl: 'professors.html',
})
export class ProfessorsPage {

  professors: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {

    this.professors = af.database.list('/professors');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Professors');
  }

}
