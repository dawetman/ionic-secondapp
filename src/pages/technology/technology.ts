import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html'
})
export class TechnologyPage {

   public items : any = [];
   constructor(public navCtrl: NavController,
               public http   : Http)
   {

   }

   ionViewWillEnter()
   {
      this.load();
   }

   load()
   {
      this.http.get('http://localhost:8200/ionic-secondapp-mysql/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }

   addEntry()
   {
      this.navCtrl.push('AddTechnology');
   }

   viewEntry(param)
   {
      this.navCtrl.push('AddTechnology', param);
   }

   ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }

}