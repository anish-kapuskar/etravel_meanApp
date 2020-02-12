import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesPackage1Component } from './cities-package1.component';

describe('CitiesPackage1Component', () => {
  let component: CitiesPackage1Component;
  let fixture: ComponentFixture<CitiesPackage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesPackage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesPackage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
