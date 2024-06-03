import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onClick1(){
    this.presentarAlert();
  }

  async presentarAlert(){
    const alert = await this.alertCtrl.create({
      header:'Alert',
      subHeader:'Important message',
      message:'This is a alert!',
      buttons:['OK'],
    });  
    await alert.present();  
  }

}
