import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CoursesPage } from '../pages/courses/courses';
import { CourseDetailsPage } from "../pages/course-details/course-details";
import { ProfessorsPage } from '../pages/professors/professors';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2'; 

// Initialize Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyCXMurZj9vx3MIGVGTL8ZlTEskzlNdZ3bI",
    authDomain: "mapd-c59e1.firebaseapp.com",
    databaseURL: "https://mapd-c59e1.firebaseio.com",
    projectId: "mapd-c59e1",
    storageBucket: "mapd-c59e1.appspot.com",
    messagingSenderId: "992977862667"
  };

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CoursesPage,
    CourseDetailsPage,
    ProfessorsPage
  ],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CoursesPage,
    CourseDetailsPage,
    ProfessorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
   bootstrap: [IonicApp]
})
export class AppModule {}
