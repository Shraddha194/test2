import { Injectable } from '@angular/core';
import { endPoints } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HotelClass } from './hotel-class';

@Injectable({
  providedIn: 'root'
})
export class HotelservicesService {
  url = endPoints.url + "hotel/";
  commonHeader = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private _http: HttpClient) { }

  getAllHotel() {
    return this._http.get<HotelClass[]>(this.url);
  }
  getHotelById(hotel_id: number) {
    return this._http.get<HotelClass[]>(this.url + hotel_id);
  }
  addHotel(item: HotelClass) {
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: this.commonHeader });
  }
  updateHotel(item: HotelClass) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + item.hotel_id, body, { headers: this.commonHeader });
  }
  deleteHotel(hotel_id: number) {
    // console.log('hotel id'+hotel_id);
    return this._http.delete(this.url + hotel_id, { headers: this.commonHeader });
  }
  deleteHotelAll(item: HotelClass[]) {
    let body = JSON.stringify(item);
    return this._http.post(this.url+0,body,{headers:this.commonHeader});
  }
}
