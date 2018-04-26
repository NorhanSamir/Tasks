import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class FlightListService {
 flightListUrl = '../assets/api/flightList.json';

  constructor(private _http: Http) { }
  hero:any;
  getFlights() {
  return this._http.get(this.flightListUrl) .map(res => res.json());
    }

    }
