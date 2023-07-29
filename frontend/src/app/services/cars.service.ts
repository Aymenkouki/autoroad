import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url='http://127.0.0.1:3000/cars/';

  constructor(private http:HttpClient) { }

  create(car:any){
    return this.http.post(this.url + 'ajout' , car);
  }

  getall(){
    return this.http.get(this.url + 'getall');
  }



}
