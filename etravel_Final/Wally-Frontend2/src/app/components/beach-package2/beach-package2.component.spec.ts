import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachPackage2Component } from './beach-package2.component';

describe('BeachPackage2Component', () => {
  let component: BeachPackage2Component;
  let fixture: ComponentFixture<BeachPackage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachPackage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachPackage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
