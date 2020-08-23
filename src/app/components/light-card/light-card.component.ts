import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss']
})
export class LightCardComponent implements OnInit {
  @Input() name: string;
  @Input() address: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
