import { Component, OnInit ,Input} from '@angular/core';
import { FlightListService } from '../flightList.service';


@Component({
  selector: 'app-flight-listing-page',
  templateUrl: './flight-listing-page.component.html',
  styleUrls: ['./flight-listing-page.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush

})
export class FlightListingPageComponent implements OnInit {
 // @Input('data') meals: string[] = ["1","2","2","4"];
  page: number = 1;
  constructor(private ListingService: FlightListService) { }
  ngOnInit() {
    this.getFlights();
  }
  @Input('data') flightList: any[];
 
  getFlights() {
    this.ListingService.getFlights().subscribe(data => {
      this.flightList = data
    }
    );
  }

}
