import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSprintComponent } from './card-sprint.component';

describe('CardSprintComponent', () => {
  let component: CardSprintComponent;
  let fixture: ComponentFixture<CardSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
