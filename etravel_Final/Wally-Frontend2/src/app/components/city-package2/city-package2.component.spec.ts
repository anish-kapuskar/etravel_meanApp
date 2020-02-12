import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPackage2Component } from './city-package2.component';

describe('CityPackage2Component', () => {
  let component: CityPackage2Component;
  let fixture: ComponentFixture<CityPackage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPackage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPackage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
