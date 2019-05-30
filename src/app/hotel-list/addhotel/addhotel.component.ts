import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotelservicesService } from '../hotelservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  hotelform:FormGroup;
  constructor(private _hdata:HotelservicesService,
    private _router:Router) { }

  ngOnInit() {
    this.hotelform=new FormGroup({
        hotel_id: new FormControl(null,[Validators.required]),
        hotel_name: new FormControl(null,[Validators.required]),
        owner_name: new FormControl(null),
        contact_no: new FormControl(null),
        email: new FormControl(null),
        star_category: new FormControl(null),
        group_name: new FormControl(null),
        copyright_by: new FormControl(null),
        ownership_type: new FormControl(null),
        address: new FormControl(null),
        landmark: new FormControl(null),
        pincode: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null),
        country: new FormControl(null),
        website: new FormControl(null),
        pfirstname: new FormControl(null),
        plastname: new FormControl(null),
        pdesignation: new FormControl(null),
        pemail: new FormControl(null),
        pcontact_no: new FormControl(null),
        package_type: new FormControl(null),
        pay_charge: new FormControl(null),
        package_name: new FormControl(null),
        valid_form: new FormControl(null),
        valid_to: new FormControl(null),
        days: new FormControl(null)

    });
  }
onHotelAdd(){

    let hoteldata=this.hotelform.value;
    console.log(hoteldata);
    this._hdata.addHotel(hoteldata).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.affectedRows==1){
          console.log(data.insertId);
          this._router.navigate(['/']);
          alert('Successfully added one record');
        }
        else{
          alert('something went wrong');
        }
      }
    );
  }
}
