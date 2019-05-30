import { Injectable } from '@angular/core';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EdithotelGuardService implements CanDeactivate<EdithotelComponent>{
 canDeactivate(component:EdithotelComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot):boolean{
    if(component.isDirty()){
      return confirm("Are U Sure To Navigate ?");
    }
    return true;
  }
  constructor() { }
}
