import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsShowComponent } from './validators-show.component';

describe('ValidatorsShowComponent', () => {
  let component: ValidatorsShowComponent;
  let fixture: ComponentFixture<ValidatorsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
