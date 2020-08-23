import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from "@angular/core";

@Component({
  selector: 'app-canvas-colorcircle',
  templateUrl: './canvas-colorcircle.component.html',
  styleUrls: ['./canvas-colorcircle.component.scss']
})
export class CanvasColorcircleComponent implements OnInit {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
