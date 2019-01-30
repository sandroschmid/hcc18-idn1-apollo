import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelQuestionComponent } from './panel-question.component';

describe('PanelQuestionComponent', () => {
  let component: PanelQuestionComponent;
  let fixture: ComponentFixture<PanelQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelQuestionComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
