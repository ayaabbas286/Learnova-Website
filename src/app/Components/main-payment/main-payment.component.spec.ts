import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPaymentComponent } from './main-payment.component';

describe('MainPaymentComponent', () => {
  let component: MainPaymentComponent;
  let fixture: ComponentFixture<MainPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
