import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTariffsComponent } from './section-tariffs.component';

describe('SectionTariffsComponent', () => {
  let component: SectionTariffsComponent;
  let fixture: ComponentFixture<SectionTariffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTariffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTariffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
