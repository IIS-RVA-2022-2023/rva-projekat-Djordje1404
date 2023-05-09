import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudDialogComponent } from './sud-dialog.component';

describe('SudDialogComponent', () => {
  let component: SudDialogComponent;
  let fixture: ComponentFixture<SudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
