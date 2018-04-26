import { Component, OnInit } from '@angular/core';
import { FlightListService } from '../flightList.service';


@Component({
  selector: 'app-flight-listing',
  templateUrl: './flight-listing.component.html',
  styleUrls: ['./flight-listing.component.css']
})
export class FlightListingComponent implements OnInit {

  constructor(private ListingService: FlightListService) { }
  ngOnInit() {
    this.getFlights();

  }
  flightList: any[];;
  onList:any[];
  offCount:number
  errorList:any;
  //get flights from service
  getFlights() {
    this.ListingService.getFlights().subscribe(data => {
      this.flightList = data
      this.onList = this.flightList.filter(on => on.status === "on");
      this.errorList=this.flightList.filter(err=>err.status==="off");
      this.offCount=this.errorList.length
    }
    );
  }


}

