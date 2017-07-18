import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataOne } from './data';

@NgModule({
  declarations: [
    DataOne,
  ],
  imports: [
    IonicPageModule.forChild(DataOne),
  ],
  exports: [
    DataOne
  ]
})
export class DataModule {}
