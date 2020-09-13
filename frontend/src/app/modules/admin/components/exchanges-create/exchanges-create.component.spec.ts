import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesCreateComponent } from './exchanges-create.component';

describe('ExchangesCreateComponent', () => {
  let component: ExchangesCreateComponent;
  let fixture: ComponentFixture<ExchangesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
