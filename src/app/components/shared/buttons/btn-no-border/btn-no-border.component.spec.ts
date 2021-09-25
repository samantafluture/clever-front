import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNoBorderComponent } from './btn-no-border.component';

describe('BtnNoBorderComponent', () => {
  let component: BtnNoBorderComponent;
  let fixture: ComponentFixture<BtnNoBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnNoBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnNoBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
