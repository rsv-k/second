import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThirdMessageComponent } from './section-third-message.component';

describe('SectionThirdMessageComponent', () => {
  let component: SectionThirdMessageComponent;
  let fixture: ComponentFixture<SectionThirdMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThirdMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThirdMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
