import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPackage4Component } from './city-package4.component';

describe('CityPackage4Component', () => {
  let component: CityPackage4Component;
  let fixture: ComponentFixture<CityPackage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPackage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPackage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
