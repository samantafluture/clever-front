import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBorderComponent } from './btn-border.component';

describe('BtnBorderComponent', () => {
  let component: BtnBorderComponent;
  let fixture: ComponentFixture<BtnBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
