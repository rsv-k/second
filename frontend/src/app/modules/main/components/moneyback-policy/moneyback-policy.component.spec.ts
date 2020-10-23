import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneybackPolicyComponent } from './moneyback-policy.component';

describe('MoneybackPolicyComponent', () => {
  let component: MoneybackPolicyComponent;
  let fixture: ComponentFixture<MoneybackPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneybackPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneybackPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
