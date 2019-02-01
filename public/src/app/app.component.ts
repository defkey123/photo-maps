import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 47.5957085;
  lng: number = -122.1929327;
  latNew: number = this.lat;
  lngNew: number = this.lng;
  locationChosen = false;
  markers: any[] = [];
  newMarkerMap: any = { name: "", description: "", markers: [] }
  createMapErrors: any;

  constructor(  private _http: HttpService,
                private _route: ActivatedRoute,
                private _router: Router) { }

     

  onChooseLocation($event){
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
    this.latNew = $event.coords.lat;
    this.lngNew = $event.coords.lng;
    this.locationChosen = true;
    console.log(this.latNew+" "+this.lngNew);
    console.log(this.markers);
  }

  submitMap(){
    this.newMarkerMap.markers = this.markers;
    this._http.createMarkerMap(this.newMarkerMap).subscribe(data => {
      if (data['errors']) {
        this.createMapErrors = data;
        console.log(this.createMapErrors);
      }
      else {
        this._router.navigate([''])
      }
    })
  }
  
  sayHi() {
    console.log('hi')
  }
}
