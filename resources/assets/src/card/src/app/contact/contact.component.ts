import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

  }

  cfullname = '';
  cemail = '';
  cbudget = '';
  cmessage = '';
  
  
  submitMessage()
  {
    
    this.httpClient.post(`/api/message`,{
      cfullname: this.cfullname,
      cemail: this.cemail,
      cbudget : this.cbudget,
      cmessage : this.cmessage,
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
