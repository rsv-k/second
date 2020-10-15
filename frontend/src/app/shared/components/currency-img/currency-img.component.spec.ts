import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyImgComponent } from './currency-img.component';

describe('CurrencyImgComponent', () => {
  let component: CurrencyImgComponent;
  let fixture: ComponentFixture<CurrencyImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
