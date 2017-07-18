import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipOne } from './tip-one';

@NgModule({
  declarations: [
    TipOne,
  ],
  imports: [
    IonicPageModule.forChild(TipOne),
  ],
  exports: [
    TipOne
  ]
})
export class TipOneModule {}
