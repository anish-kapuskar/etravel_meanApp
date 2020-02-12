
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaypalComponent } from './paypal.component';

describe('PaypalComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PaypalComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'paypal'`, () => {
    const fixture = TestBed.createComponent(PaypalComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('paypal');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PaypalComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('paypal app is running!');
  });
});