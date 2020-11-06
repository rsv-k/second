import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsCreateComponent } from './validators-create.component';

describe('ValidatorsCreateComponent', () => {
  let component: ValidatorsCreateComponent;
  let fixture: ComponentFixture<ValidatorsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
