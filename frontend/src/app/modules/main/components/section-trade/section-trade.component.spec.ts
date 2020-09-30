import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTradeComponent } from './section-trade.component';

describe('SectionTradeComponent', () => {
  let component: SectionTradeComponent;
  let fixture: ComponentFixture<SectionTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
