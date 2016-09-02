import {Component} from '@angular/core';
import {NavController, Popup} from 'ionic-angular';

import {Auth, User, UserDetails, IDetailedError} from '@ionic/cloud-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  data:any={};
   //sd
  constructor(private navCtrl: NavController, public auth: Auth, public user: User,public popup: Popup) {
    this.data = {
      email:'',
      password:''
    }
  }
   
  
  signIn(){
    
    
    let details: UserDetails = {'email': this.data.email, 'password': this.data.password};
    
    console.log('signIn',details)
    this.auth.signup(details).then(() => {
      // `this.user` is now registered
      console.log('user registered');
    }, (err) => { //: IDetailedError<string[]>
    console.log(err)
      for (let e of err.details) {
        if (e === 'conflict_email') {
          this.doAlert('Email already exists.');
        } else {
          // handle other errors
          this.doAlert(e);
        }
      }
    });
    
  }
  
   doAlert(template) {
    this.popup.alert({
      title: "Alert",
      template: template,
      cssClass: 'my-alert'
    }).then(() => {
      console.log('Alert closed');
    });
  }
  
  
}
