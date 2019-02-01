import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getMarkerMaps(){
    return this._http.get('/api/markermaps');
  }
  getOneMarkerMap(id: string){
    return this._http.get('/api/markermaps/' + id);
  }
  createMarkerMap(body){
    return this._http.post('/api/markermaps', body);
  }
  updateMarkerMap(id: string, body){
    console.log(id + ", " + body);
    return this._http.put('/api/markermaps/' + id, body);
  }
  deleteMarkerMap(id: string){
    return this._http.delete('/api/markermaps/' + id);
  }
}
