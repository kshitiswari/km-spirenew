import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.css']
})
export class DateDisplayComponent implements OnInit {
datemsg:string;
  constructor() {
    setInterval(()=>{
    let currDate=new Date();
    this.datemsg=currDate.toDateString()+" "+currDate.toLocaleTimeString();
    },1000);

   }

  ngOnInit() {
  }

}
