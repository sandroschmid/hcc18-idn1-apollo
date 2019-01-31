import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggSizeDistributionComponent } from './egg-size-distribution.component';

describe('EggSizeDistributionComponent', () => {
  let component: EggSizeDistributionComponent;
  let fixture: ComponentFixture<EggSizeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EggSizeDistributionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggSizeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
