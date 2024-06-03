import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarPageRoutingModule } from './avatar-routing.module';

import { ComponentsModule } from "../../components/components.module";
import { AvatarPage } from './avatar.page';

@NgModule({
    declarations: [AvatarPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AvatarPageRoutingModule,
        ComponentsModule
    ]
})
export class AvatarPageModule {}
