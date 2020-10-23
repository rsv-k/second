import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTradeThirdComponent } from './section-trade-third.component';

describe('SectionTradeThirdComponent', () => {
  let component: SectionTradeThirdComponent;
  let fixture: ComponentFixture<SectionTradeThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTradeThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTradeThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
