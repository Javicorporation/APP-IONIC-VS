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
      cssClass: 'my-custom-class',
      buttons:[
        {
        text:'Delete',
        role:'destructive',
        icon:'trash-outline',
        id: 'delete-button',
        data:{type: 'delete'},
        handler: () => { console.log('Delete clicked')}
        },
        {

        },
        {

        },
        {
          
        }
      ]




    });
    await actionSheet.present();

  }

}
