import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenHouseComponent } from './hen-house.component';

describe('HenHouseComponent', () => {
  let component: HenHouseComponent;
  let fixture: ComponentFixture<HenHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
