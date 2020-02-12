import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachPackage1Component } from './beach-package1.component';

describe('BeachPackage1Component', () => {
  let component: BeachPackage1Component;
  let fixture: ComponentFixture<BeachPackage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachPackage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachPackage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
