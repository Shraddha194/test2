import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user-list/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellComponent } from './shell/shell.component';

const arr: Routes = [

    {
        path: '', component: ShellComponent,
        loadChildren: './hotel-list/hotellist.module#hotellistModule'
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
    // Demo2-{path: '', redirectTo: '/home', pathMatch: 'full'},
    // {path:'',component:HotelListComponent},
    // {path:'addhotel',component:AddhotelComponent,canActivate:[UserGuardService]},
    // {path:'viewhotel/:hotel_id',component:ViewhotelComponent},
    // {path:'edithotel/:hotel_id',component:EdithotelComponent,canDeactivate:[EdithotelGuardService]},
    // {path:'login',component:LoginComponent},
    // {path:'**',component:PageNotFoundComponent}

];

export const routingArr = RouterModule.forRoot(arr);