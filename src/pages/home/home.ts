import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IntroOne } from '../sections/section-one/intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public imagePath = 'assets/images/main_back.jpg';
  constructor(public navCtrl: NavController) {

  }

  stratPlan(){
    this.navCtrl.setRoot(IntroOne);
  }

}
