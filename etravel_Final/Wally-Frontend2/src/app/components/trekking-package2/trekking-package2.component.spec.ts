import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkingPackage2Component } from './trekking-package2.component';

describe('TrekkingPackage2Component', () => {
  let component: TrekkingPackage2Component;
  let fixture: ComponentFixture<TrekkingPackage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekkingPackage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkingPackage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
