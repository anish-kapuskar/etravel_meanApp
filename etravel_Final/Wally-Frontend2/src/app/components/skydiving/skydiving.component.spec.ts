import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydivingComponent } from './skydiving.component';

describe('SkydivingComponent', () => {
  let component: SkydivingComponent;
  let fixture: ComponentFixture<SkydivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkydivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkydivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
