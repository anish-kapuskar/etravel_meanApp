import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydivingPackage3Component } from './skydiving-package3.component';

describe('SkydivingPackage3Component', () => {
  let component: SkydivingPackage3Component;
  let fixture: ComponentFixture<SkydivingPackage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkydivingPackage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkydivingPackage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
