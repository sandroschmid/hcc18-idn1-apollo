import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelResponseItemComponent } from './panel-response-item.component';

describe('PanelResponseItemComponent', () => {
  let component: PanelResponseItemComponent;
  let fixture: ComponentFixture<PanelResponseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelResponseItemComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelResponseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
