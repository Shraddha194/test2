import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelservicesService } from '../hotelservices.service';
import { HotelClass } from '../hotel-class';

@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.css']
})
export class EdithotelComponent implements OnInit {
  hoteleditform: FormGroup;
  hotel_id: number;
  originalData: HotelClass;
  currentData: HotelClass;
  constructor(private _activatedRoute: ActivatedRoute,
    private _hdata: HotelservicesService,
    private _router: Router) { }

  ngOnInit() {
    this.hoteleditform = new FormGroup({
      hotel_id: new FormControl(null, [Validators.required]),
      hotel_name: new FormControl(null, [Validators.required]),
      owner_name: new FormControl(null, [Validators.required]),
      contact_no: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      star_category: new FormControl(null, [Validators.required]),
      group_name: new FormControl(null, [Validators.required]),
      copyright_by: new FormControl(null, [Validators.required]),
      ownership_type: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      landmark: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      website: new FormControl(null, [Validators.required]),
      pfirstname: new FormControl(null, [Validators.required]),
      plastname: new FormControl(null, [Validators.required]),
      pdesignation: new FormControl(null, [Validators.required]),
      pemail: new FormControl(null, [Validators.required]),
      pcontact_no: new FormControl(null, [Validators.required]),
      package_type: new FormControl(null, [Validators.required]),
      pay_charge: new FormControl(null, [Validators.required]),
      package_name: new FormControl(null, [Validators.required]),
      valid_form: new FormControl(null, [Validators.required]),
      valid_to: new FormControl(null, [Validators.required]),
      days: new FormControl(null, [Validators.required])

    });
    this.hotel_id = this._activatedRoute.snapshot.params['hotel_id'];
    this._hdata.getHotelById(this.hotel_id).subscribe(
      (data: HotelClass[]) => this.getAlldetails(data[0])
    );
    this.hoteleditform.valueChanges.subscribe(
      (data: any) => {
        this.currentData = data;
      });
  }
  isDirty(): boolean {
    if (JSON.stringify(this.currentData) !== JSON.stringify(this.originalData)) {
      return true;
    }
    return false;
  }
  getAlldetails(data: HotelClass) {
    this.currentData=data;
    this.originalData=data;
    this.hoteleditform.patchValue({
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
  onHotelEdit() {
    console.log(this.hoteleditform);
    let hotelupdate = this.hoteleditform.value;
    this._hdata.updateHotel(hotelupdate).subscribe(
      (data: any) => {
        this.currentData=null;
        this.originalData=null;
        console.log(data);
        if (data.affectedRows == 1) {
          this._router.navigate(['/']);
          alert("Successfully Edit Record");
        }
        else {
          alert("something Went Wrong");
        }
      }
    );
  }
}
