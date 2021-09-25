import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChartsComponent } from './card-charts.component';

describe('CardChartsComponent', () => {
  let component: CardChartsComponent;
  let fixture: ComponentFixture<CardChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
