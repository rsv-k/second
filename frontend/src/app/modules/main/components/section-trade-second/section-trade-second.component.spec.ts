import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTradeSecondComponent } from './section-trade-second.component';

describe('SectionTradeSecondComponent', () => {
  let component: SectionTradeSecondComponent;
  let fixture: ComponentFixture<SectionTradeSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTradeSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTradeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
