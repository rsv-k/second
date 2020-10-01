import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTradeProgressComponent } from './section-trade-progress.component';

describe('SectionTradeProgressComponent', () => {
  let component: SectionTradeProgressComponent;
  let fixture: ComponentFixture<SectionTradeProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTradeProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTradeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
