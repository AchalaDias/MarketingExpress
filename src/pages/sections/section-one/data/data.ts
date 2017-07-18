import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';

import { TipOne } from '../tip-one/tip-one';


@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataOne {

  toster:any;
  buttonEnable:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.toster = this.toastCtrl.create({});
  }


  tip() {
    // let popover = this.popoverCtrl.create(TipOne);
    // popover.present();
   this.buttonEnable = false;
    this.toster = this.toastCtrl.create({
    message: '#Tip : \
    Describe your Company. \
    [Give a short, clear description of your product, service or idea. Try to image that you are introducing your business for the first time to a new client. Try to do it in about three sentences.] \
    Tip : [What is your company known for? Do you have a popular product? Do you deliver great customer service? If you are a startup, what would you like to be known for?] \
    ',
    duration: 30000,
    position: 'bottom'
  });
 
   this.toster.setShowCloseButton(true);
   this.toster.present();

   this.toster.onDidDismiss(() => {
    this.buttonEnable = true;
  });
}

ionViewWillLeave(){
    this.toster.dismissAll();
}

}
