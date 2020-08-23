import { Component, OnInit } from '@angular/core';
import {LightService, LightDataInterface} from "../../services/light.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {
  private lightList;

  constructor(private lights: LightService, private router: Router) { }

  ngOnInit(): void {
    this.lights.getLights().subscribe((response) => {
      console.log(response);
      this.lightList = response;
    })
  }

  navigateToLight(light_obj: LightDataInterface){
    console.log(light_obj);
    this.router.navigate([`light`, light_obj.type], {queryParams: {
      name: light_obj.name,
      address: light_obj.address[0],
      type: light_obj.type
    }});
  }

}
