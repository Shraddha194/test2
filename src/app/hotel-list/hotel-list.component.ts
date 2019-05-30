import { Component, OnInit } from '@angular/core';
import { HotelClass } from './hotel-class';
import { HotelservicesService } from './hotelservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  flag: boolean=true;
  arrData: HotelClass[] = [];
  deleteArr:HotelClass[]=[];
  constructor(private _hdata: HotelservicesService,
    private _router: Router) { }

  ngOnInit() {
    this._hdata.getAllHotel().subscribe(
      (data: HotelClass[]) => {
        this.arrData = data;
        this.flag = false;
      },
      function (err) {
        console.log(err);
      },
      function () {
        console.log('call completed');
      }
    );
  }
  onHotelDelete(item:HotelClass){
    if(confirm("Are u Sure U want to del  ?")){
      this._hdata.deleteHotel(item.hotel_id).subscribe(
        (data:any)=>{
            if(data.affectedRows>0){
              this.arrData.splice(this.arrData.indexOf(item),1);
            }
        }
      );
    }
  }
  onViewData(item:HotelClass){
    this._router.navigate(['/viewhotel', item.hotel_id]);
  }
  onHotelEdit(item:HotelClass){
    this._router.navigate(['/edithotel', item.hotel_id]);
  }
  checkbox(item:HotelClass){
    if(this.deleteArr.find(x=>x==item)){
      this.deleteArr.splice(this.deleteArr.indexOf(item),1);
    }
    else{
      this.deleteArr.push(item);
    }
  }
  i:number=0;
  onDeleteAll(){
    if(confirm("Are Sure U Want To Delete?")){
      this._hdata.deleteHotelAll(this.deleteArr).subscribe(
        (data:any)=>{
          for(this.i=0;this.i<this.deleteArr.length;this.i++){
            if(this.arrData.find(x=>x==this.deleteArr[this.i])){
              this.arrData.splice(this.arrData.indexOf(this.deleteArr[this.i],1));
            }
          }
        }
      );
    }
  }

}
