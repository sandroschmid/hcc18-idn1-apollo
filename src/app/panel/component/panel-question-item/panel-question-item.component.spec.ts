import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelQuestionItemComponent } from './panel-question-item.component';

describe('PanelQuestionItemComponent', () => {
  let component: PanelQuestionItemComponent;
  let fixture: ComponentFixture<PanelQuestionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelQuestionItemComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelQuestionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
