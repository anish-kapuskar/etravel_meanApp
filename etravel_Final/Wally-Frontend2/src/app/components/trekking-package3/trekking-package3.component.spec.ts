import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkingPackage3Component } from './trekking-package3.component';

describe('TrekkingPackage3Component', () => {
  let component: TrekkingPackage3Component;
  let fixture: ComponentFixture<TrekkingPackage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekkingPackage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkingPackage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
