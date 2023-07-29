import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private _cars:CarsService) { }

  car:any;
  cars:any[]=[];
  ngOnInit(): void {

    this._cars.getall()
    .subscribe(
      {
        next:(res)=>{
          this.car=res;

          for(let i=0; i<this.car.length ; i++){
            this.cars.push(this.car[i])
          }

        },
        error:(err)=>{
          console.log(err);
          
        }
      }
    )

  }


  tablesize=4;
  page=1;
  count=0;

  ontabledatachange(event:any){
    this.page = event;
  }

  

}
