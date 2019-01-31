import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenItemComponent } from './chicken-item.component';

describe('ChickenItemComponent', () => {
  let component: ChickenItemComponent;
  let fixture: ComponentFixture<ChickenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChickenItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
