import { Routes, RouterModule } from "@angular/router";
import { HotelListComponent } from './hotel-list.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { UserGuardService } from '../user-list/user-guard.service';
import { ViewhotelComponent } from './viewhotel/viewhotel.component';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { EdithotelGuardService } from './edithotel-guard.service';

const arr:Routes=[
            { path:'',component:HotelListComponent},
            { path: 'addhotel', component: AddhotelComponent, canActivate: [UserGuardService] },
            { path: 'viewhotel/:hotel_id', component: ViewhotelComponent },
            { path: 'edithotel/:hotel_id', component: EdithotelComponent, canDeactivate: [EdithotelGuardService] }
 
];
export const routingHotellist=RouterModule.forChild(arr);