import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { ComponentsModule } from "../../components/components.module";
import { InputPage } from './input.page';

@NgModule({
    declarations: [InputPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InputPageRoutingModule,
        ComponentsModule
    ]
})
export class InputPageModule {}
