import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachPackage3Component } from './beach-package3.component';

describe('BeachPackage3Component', () => {
  let component: BeachPackage3Component;
  let fixture: ComponentFixture<BeachPackage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachPackage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachPackage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
