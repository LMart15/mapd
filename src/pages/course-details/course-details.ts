import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'page-course-details',
  templateUrl: 'course-details.html',
})
export class CourseDetailsPage {

  course: {};
  courseObservable: FirebaseObjectObservable<any>;
  courses: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {

    this.courses = af.database.list('/courses');

    const courseID = navParams.get('courseID');
    const semester = navParams.get('semester');

        this.courseObservable = af.database.object('/courses/semester' + semester + "/" + courseID, { preserveSnapshot: true });
          this.courseObservable.subscribe(snapshot => {
          this.course = {
              id: snapshot.key,
              code: snapshot.val().code,
              title: snapshot.val().title,
              description: snapshot.val().description,
              numHours: snapshot.val().numHours,
              location: snapshot.val().location
            }; 
          });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseDetails');
  }

 

}
