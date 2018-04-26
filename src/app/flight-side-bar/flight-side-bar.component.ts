import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-side-bar',
  templateUrl: './flight-side-bar.component.html',
  styleUrls: ['./flight-side-bar.component.css']
})
export class FlightSideBarComponent implements OnInit {
isOpen:boolean;
  constructor() { }

  ngOnInit() {
this.isOpen=false;
  }
  //check if right bar is open  orclose
  checkOpenOrClose(){
    this.isOpen = !this.isOpen;  
  }
}