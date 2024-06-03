import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimePageRoutingModule } from './datetime-routing.module';

import { ComponentsModule } from "../../components/components.module";
import { DatetimePage } from './datetime.page';

@NgModule({
    declarations: [DatetimePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DatetimePageRoutingModule,
        ComponentsModule
    ]
})
export class DatetimePageModule {}
