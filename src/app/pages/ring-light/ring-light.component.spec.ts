import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingLightComponent } from './ring-light.component';

describe('RingLightComponent', () => {
  let component: RingLightComponent;
  let fixture: ComponentFixture<RingLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
