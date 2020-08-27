import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';


export interface LightDataInterface{
  name: string,
  id: number,
  type: string,
  address: string
}

@Injectable({
  providedIn: 'root'
})
export class LightService { 

  constructor(private http: HttpClient) { }

  getLights(){
    return this.http.get(environment.apiurl+"/lights");
  }

  setLightsColor(r, g, b, brightness){
    return this.http.post<any>(environment.apiurl+"/lights/set_color", {
      r: r,
      g: g,
      b: b,
      brightness: brightness
    });
  }
}
