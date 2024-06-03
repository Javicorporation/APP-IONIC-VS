import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage ='';
  roleMessage = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onClick1(){
    this.presentarAlert();
  }

  // boton de alerta de una opcion
  async presentarAlert(){
    const alert = await this.alertCtrl.create({
      header:'Alert',
      subHeader:'Important message',
      message:'This is a alert!',
      buttons:['OK'],
    });  
    await alert.present();  
  }

  // boton de alerta de multiple opcion
  async presentarMultipleAlert(){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [{
        text: 'OK!',
        handler: () => {
        console.log('Click en OK!')
        }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo'
          }]
    });
    await alert.present();
  };

}
