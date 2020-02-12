import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkingPackage1Component } from './trekking-package1.component';

import {ActivatedRoute} from '@angular/router';
import { AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

describe('TrekkingPackage1Component', () => {
  let component: TrekkingPackage1Component;
  let fixture: ComponentFixture<TrekkingPackage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekkingPackage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkingPackage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
