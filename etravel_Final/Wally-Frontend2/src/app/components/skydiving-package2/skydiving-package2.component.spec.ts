import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydivingPackage2Component } from './skydiving-package2.component';

describe('SkydivingPackage2Component', () => {
  let component: SkydivingPackage2Component;
  let fixture: ComponentFixture<SkydivingPackage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkydivingPackage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkydivingPackage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
