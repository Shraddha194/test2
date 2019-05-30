import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { ViewhotelComponent } from './viewhotel/viewhotel.component';
import { routingHotellist } from './hotellist.routing';

@NgModule({
    declarations: [
        HotelListComponent,
        AddhotelComponent,
        EdithotelComponent,
        ViewhotelComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        routingHotellist
    ]
})
export class hotellistModule { }