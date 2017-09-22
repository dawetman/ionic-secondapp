import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailPage } from '../email/email';
import { TechnologyPage } from '../technology/technology';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

onLoadEmail(){
	this.navCtrl.push(EmailPage);

    console.log("Clicked, go to Email");
  }

onLoadTechnology(){
	this.navCtrl.push(TechnologyPage);

    console.log("Clicked, go to Technology");
  }

}

