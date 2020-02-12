import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPackage3Component } from './city-package3.component';

describe('CityPackage3Component', () => {
  let component: CityPackage3Component;
  let fixture: ComponentFixture<CityPackage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPackage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPackage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
