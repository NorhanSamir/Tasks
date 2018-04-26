import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule,MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FlightHeaderComponent } from './flight-header/flight-header.component';
import { FlightMapComponent } from './flight-map/flight-map.component';
import { FlightNavComponent } from './flight-nav/flight-nav.component';
import { FlightSideBarComponent } from './flight-side-bar/flight-side-bar.component';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { FlightDeatilsComponent } from './flight-deatils/flight-deatils.component';
import { HttpModule } from '@angular/http';
import { FlightListService } from './flightList.service';
import { RouterModule, Routes } from '@angular/router';
import { FlightHomeComponent } from './flight-home/flight-home.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FlightListingPageComponent } from './flight-listing-page/flight-listing-page.component';
import { FlightDetailsDialogComponent } from './flight-details-dialog/flight-details-dialog.component';
//route paths
const appRoutes: Routes = [
  
  { path: 'FlightHomeComponent',      component: FlightHomeComponent },
  {
    path: 'flightListing',
    component: FlightListingPageComponent,
  },
  { path: '',
    redirectTo: 'FlightHomeComponent',
    pathMatch: 'full'
  },
  { path: '**', component: FlightHomeComponent }
]; 
@NgModule({
  declarations: [
    AppComponent,
    FlightHeaderComponent,
    FlightMapComponent,
    FlightNavComponent,
    FlightSideBarComponent,
    FlightListingComponent,
    FlightDeatilsComponent,
    FlightHomeComponent,
    FlightListingPageComponent,
    FlightDetailsDialogComponent,

  ],
  imports: [

    BrowserModule, BrowserAnimationsModule, MatTabsModule, MatDialogModule,MatButtonModule, HttpModule,NgxPaginationModule, RouterModule.forRoot(
      appRoutes  )
  ], entryComponents: [
    FlightDetailsDialogComponent
],
  providers: [FlightListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
