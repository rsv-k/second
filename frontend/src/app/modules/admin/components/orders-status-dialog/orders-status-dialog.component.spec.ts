import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersStatusDialogComponent } from './orders-status-dialog.component';

describe('OrdersStatusDialogComponent', () => {
  let component: OrdersStatusDialogComponent;
  let fixture: ComponentFixture<OrdersStatusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersStatusDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
