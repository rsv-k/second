import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsShowComponent } from './merchants-show.component';

describe('MerchantsShowComponent', () => {
  let component: MerchantsShowComponent;
  let fixture: ComponentFixture<MerchantsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
