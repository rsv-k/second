import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesShowComponent } from './currencies-show.component';

describe('CurrenciesShowComponent', () => {
  let component: CurrenciesShowComponent;
  let fixture: ComponentFixture<CurrenciesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
