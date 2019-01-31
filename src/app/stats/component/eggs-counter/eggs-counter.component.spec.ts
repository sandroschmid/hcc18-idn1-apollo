import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsCounterComponent } from './eggs-counter.component';

describe('EggsCounterComponent', () => {
  let component: EggsCounterComponent;
  let fixture: ComponentFixture<EggsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EggsCounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
