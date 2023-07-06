import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactPreviewComponent } from './preview.component';

describe('AdminContactPreviewComponent', () => {
  let component: AdminContactPreviewComponent;
  let fixture: ComponentFixture<AdminContactPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContactPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContactPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
