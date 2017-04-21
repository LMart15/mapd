import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CourseDetailsPage } from "../course-details/course-details"
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  semCourses1: FirebaseListObservable<any>;
  semCourses2: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {

    this.semCourses1 = af.database.list('/courses/semester1');
    this.semCourses2 = af.database.list('/courses/semester2');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Courses');
  }

  onCourseClick(courseID: String, semester: String){
    this.navCtrl.push(CourseDetailsPage, {courseID: courseID, semester: semester});
  };

}
