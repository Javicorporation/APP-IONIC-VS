import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController){}

  ngOnInit() {
  }

  onClick0() {
  this.presentarActionSheet();
  }

  async presentarActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      buttons:[
        {
          text:'Delete',
          role:'destructive',
          icon:'trash-outline',
          cssClass: 'rojo',
          id: 'delete-button',
          data:{type: 'delete'},
          handler: () => { console.log('Delete clicked');}
        
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data:10,
          handler:() => {console.log('Share clicked');}
        },
        {
          text:'Play (open modal)',
          icon:'caret-forward-circle-outline',
          data: 'Data value',
          handler:() =>{ console.log('Play clicked');}

        },
        {
          text:'Favorite',
          icon:'heart-outline',
          handler:() =>{console.log('');}
        },
        {
          text:'Cancel',
          icon:'close-outline',
          cssClass: 'rojo',
          role: 'cancel',
          handler:() =>{console.log('');}
        }
      ]

    });
    await actionSheet.present(); // presenta

    const {role, data} = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data)

  }

}
