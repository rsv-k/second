import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesShowComponent } from './exchanges-show.component';

describe('ExchangesShowComponent', () => {
  let component: ExchangesShowComponent;
  let fixture: ComponentFixture<ExchangesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
