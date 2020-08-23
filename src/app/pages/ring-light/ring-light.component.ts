import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LightService, LightDataInterface } from "../../services/light.service";

@Component({
  selector: 'app-ring-light',
  templateUrl: './ring-light.component.html',
  styleUrls: ['./ring-light.component.scss']
})
export class RingLightComponent implements OnInit {

  private name: string;
  private address: string;
  private id: number;
  private type: string;

  private base_color = {
    r: 0,
    g: 0,
    b: 0
  }

  constructor(private route: ActivatedRoute, private light: LightService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.name = params['name'];
      this.address = params['address'];
      this.type = params['type'];

      console.log(`${this.name} ${this.address} ${this.type}`)
    })
  }

  onSubmit(): void {
    this.light.setLightsColor(this.base_color.r, this.base_color.g, this.base_color.b, 255).subscribe((response) => {
      console.log(response);
    });
  }
}
