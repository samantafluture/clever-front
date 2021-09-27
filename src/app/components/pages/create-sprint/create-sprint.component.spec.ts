import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSprintComponent } from './create-sprint.component';

describe('CreateSprintComponent', () => {
  let component: CreateSprintComponent;
  let fixture: ComponentFixture<CreateSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
