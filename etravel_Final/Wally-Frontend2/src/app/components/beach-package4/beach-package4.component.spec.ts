import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachPackage4Component } from './beach-package4.component';

describe('BeachPackage4Component', () => {
  let component: BeachPackage4Component;
  let fixture: ComponentFixture<BeachPackage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachPackage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachPackage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
