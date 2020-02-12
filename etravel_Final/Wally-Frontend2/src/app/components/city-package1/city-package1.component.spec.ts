import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPackage1Component } from './city-package1.component';

describe('CityPackage1Component', () => {
  let component: CityPackage1Component;
  let fixture: ComponentFixture<CityPackage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPackage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPackage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
