import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroOne } from './intro';

@NgModule({
  declarations: [
    IntroOne,
  ],
  imports: [
    IonicPageModule.forChild(IntroOne),
  ],
  exports: [
    IntroOne
  ]
})
export class IntroModule {}
