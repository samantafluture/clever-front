import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSprintComponent } from './view-sprint.component';

describe('ViewSprintComponent', () => {
  let component: ViewSprintComponent;
  let fixture: ComponentFixture<ViewSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
