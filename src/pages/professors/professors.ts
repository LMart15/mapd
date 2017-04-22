import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-professors',
  templateUrl: 'professors.html',
})
export class ProfessorsPage {

  professors: FirebaseListObservable < any > ;
  prof: FirebaseObjectObservable < any > ;
  filteredItems: any;
  filteredItemsCache: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire, private socialSharing: SocialSharing) {

    this.professors = af.database.list('/professors');

    af.database.list('/professors', {
        preserveSnapshot: true
      })
      .subscribe(snapshots => {
        let filteredItems = []
        snapshots.forEach(snapshot => {
          filteredItems.push(
            snapshot.val()
          );
        });
        this.filteredItems = filteredItems;
        this.filteredItemsCache = filteredItems;
      })

  }

  initializeItems(): void {
    this.filteredItems = this.filteredItemsCache;
  }

  getFilteredItems(ev) {

    this.initializeItems();
    // use subscribe and foreach for filtering
    var val = ev.target.value;

    if (!val) {
      return;
    }

    this.filteredItems = this.filteredItems.filter((v) => {
      if (v.name && val) {
        if (v.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }


  onEmailProf(profEmail: string) {

    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible

    }).catch(() => {
      // Sharing via email is not possible
      alert("no email");
    });

    // Share via email
    this.socialSharing.shareViaEmail(null, null, [profEmail]).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });

  };
  }

