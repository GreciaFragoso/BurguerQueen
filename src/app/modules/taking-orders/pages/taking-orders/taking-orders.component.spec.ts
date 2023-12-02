import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakingOrdersComponent } from './taking-orders.component';

describe('TakingOrdersComponent', () => {
  let component: TakingOrdersComponent;
  let fixture: ComponentFixture<TakingOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakingOrdersComponent]
    });
    fixture = TestBed.createComponent(TakingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
