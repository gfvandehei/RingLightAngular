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

  private hue: string;
  private saturation: string;

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
    console.log(this.hue);
    console.log(this.saturation)
    let rgb = this.HSVtoRGB(10, .3, 1);
    console.log(rgb);
    this.light.setLightsColor(rgb.r, rgb.g, rgb.b, 255).subscribe((response) => {
      console.log(response);
    });
  }

  onColor(color: string){
    console.log(color);
    this.light.setLightsColor(color[1], color[0], color[2], 255).subscribe((response) => {
      console.log(response);
    });
  }

  HSVtoRGB(h, s, v) {
    let r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
}
