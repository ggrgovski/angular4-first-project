import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaseFormatComponent } from './title-case-format.component';

describe('TitleCaseFormatComponent', () => {
  let component: TitleCaseFormatComponent;
  let fixture: ComponentFixture<TitleCaseFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCaseFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCaseFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
