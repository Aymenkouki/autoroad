import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _msg:MessagesService) { }

  ngOnInit(): void {
  }

  mess={
    name : '',
    email : '',
    subject : '',
    msg : ''
  }

  sendmsg(){
    this._msg.create(this.mess)
    .subscribe(
      {
        next:(res)=>{

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your message has been sent',
            showConfirmButton: false,
            timer: 3000
          })

        },
        error:(err)=>{
          console.log(err);
          
        }
      }
    )

  }

}
