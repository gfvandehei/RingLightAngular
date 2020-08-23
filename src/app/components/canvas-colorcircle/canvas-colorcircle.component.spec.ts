import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasColorcircleComponent } from './canvas-colorcircle.component';

describe('CanvasColorcircleComponent', () => {
  let component: CanvasColorcircleComponent;
  let fixture: ComponentFixture<CanvasColorcircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasColorcircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasColorcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
