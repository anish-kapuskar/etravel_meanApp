import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydivingPackage1Component } from './skydiving-package1.component';

describe('SkydivingPackage1Component', () => {
  let component: SkydivingPackage1Compimport { async, ComponentFixture, TestBed } from '@angular/core/testing';

  import { TrekkingPackage1Component } from './trekking-package1.component';
  
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
  onent;
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
