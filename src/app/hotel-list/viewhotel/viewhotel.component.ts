import { Component, OnInit } from '@angular/core';
import { HotelservicesService } from '../hotelservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelClass } from '../hotel-class';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {
  hotelviewform: FormGroup;
  hotel_id: number;
  constructor(private _activatedRoute: ActivatedRoute,
    private _hdata: HotelservicesService,
    private _router: Router) { }

  ngOnInit() {
    this.hotelviewform = new FormGroup({
      hotel_id: new FormControl(null),
      hotel_name: new FormControl(null),
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
    this.hotel_id = this._activatedRoute.snapshot.params["hotel_id"];
    this._hdata.getHotelById(this.hotel_id).subscribe(
      (data: HotelClass[]) => this.getAlldetails(data[0])
    );
  }


  getAlldetails(data: HotelClass) {
    this.hotelviewform.patchValue({
      hotel_id: data.hotel_id,
      hotel_name: data.hotel_name,
      owner_name: data.owner_name,
      contact_no: data.contact_no,
      email: data.email,
      star_category: data.star_category,
      group_name: data.group_name,
      copyright_by: data.copyright_by,
      ownership_type: data.ownership_type,
      address: data.address,
      landmark: data.landmark,
      pincode: data.pincode,
      city: data.city,
      state: data.state,
      country: data.country,
      website: data.website,
      pfirstname: data.pfirstname,
      plastname: data.plastname,
      pdesignation: data.pdesignation,
      pemail: data.pemail,
      pcontact_no: data.pcontact_no,
      package_type: data.package_type,
      pay_charge: data.pay_charge,
      package_name: data.package_name,
      valid_form: data.valid_form,
      valid_to: data.valid_to,
      days: data.days
    });
  }
}
