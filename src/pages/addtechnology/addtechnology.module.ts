import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTechnology } from './addtechnology';

@NgModule({
  declarations: [
    AddTechnology,
  ],
  imports: [
    IonicPageModule.forChild(AddTechnology),
  ],
  exports: [
    AddTechnology
  ]
})
export class AddTechnologyModule {}