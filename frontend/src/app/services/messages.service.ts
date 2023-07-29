import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  url='http://127.0.0.1:3000/messages/';


  constructor(private http:HttpClient) { }


  create(msg:any){
    return this.http.post(this.url + 'ajout' , msg);
  }

  getall(){
    return this.http.get(this.url + 'getall');
  }

  delete(id:any){
    return this.http.delete(this.url + 'supprimer/' + id);
  }


}
