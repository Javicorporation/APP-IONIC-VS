import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'file-tray-full-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'warning-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'download-outline',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'hourglass-outline',
      name: 'Date Time',
      redirectTo: '/datetime'
    },
  ];
  constructor(private menuCtrl: MenuController){}

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuCtrl.open('first');
  }

}
