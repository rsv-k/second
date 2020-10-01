import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTradeFirstComponent } from './section-trade-first.component';

describe('SectionTradeFirstComponent', () => {
  let component: SectionTradeFirstComponent;
  let fixture: ComponentFixture<SectionTradeFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTradeFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTradeFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
