import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydivingPackage4Component } from './skydiving-package4.component';

describe('SkydivingPackage4Component', () => {
  let component: SkydivingPackage4Component;
  let fixture: ComponentFixture<SkydivingPackage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkydivingPackage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkydivingPackage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
