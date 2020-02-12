import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkingPackage4Component } from './trekking-package4.component';

describe('TrekkingPackage4Component', () => {
  let component: TrekkingPackage4Component;
  let fixture: ComponentFixture<TrekkingPackage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekkingPackage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkingPackage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
