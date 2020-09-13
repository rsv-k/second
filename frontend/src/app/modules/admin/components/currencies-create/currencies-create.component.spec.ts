import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesCreateComponent } from './currencies-create.component';

describe('CurrenciesCreateComponent', () => {
  let component: CurrenciesCreateComponent;
  let fixture: ComponentFixture<CurrenciesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
