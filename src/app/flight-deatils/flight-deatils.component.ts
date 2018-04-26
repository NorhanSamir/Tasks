import { Component, OnInit, Input } from '@angular/core';
import { MatDialog} from '@angular/material';
import { FlightDetailsDialogComponent } from '../flight-details-dialog/flight-details-dialog.component';
import { FlightListService } from '../flightList.service';
@Component({
  selector: 'app-flight-deatils',
  templateUrl: './flight-deatils.component.html',
  styleUrls: ['./flight-deatils.component.css']
})
export class FlightDeatilsComponent implements OnInit {
  ngOnInit(): void {
    this.getFlightById();
  }
  @Input() id: number;
  @Input() trial: string;
  @Input() fromName: string;
  @Input() fromCountry: string;
  @Input() toName: string;
  @Input() toCountry: string;
  singleFlight: any;
  constructor(public dialog: MatDialog, private ListingService: FlightListService) { }
  //get flight by id
  getFlightById() {
    this.ListingService.getFlights().subscribe(data => {

      this.singleFlight = data.filter(flight => flight.id === this.id)
    });
  }
  //popup function
  openDialog(): void {
  
    let dialogRef = this.dialog.open(FlightDetailsDialogComponent, {
      width: '400px',
      data: {
         name: this.singleFlight[0].fromAiroportNAme, country: this.singleFlight[0].fromCountry
        , phone: this.singleFlight[0].airportNo, terminal: this.singleFlight[0].terminal,shortName:this.singleFlight[0].airportShortcut
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }




}
