import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydivingPackage1Component } from './skydiving-package1.component';

describe('SkydivingPackage1Component', () => {
  let component: SkydivingPackage1Component;
  let fixture: ComponentFixture<SkydivingPackage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkydivingPackage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkydivingPackage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
