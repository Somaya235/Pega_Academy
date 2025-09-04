import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmissionComponent } from './fmission.component';

describe('FmissionComponent', () => {
  let component: FmissionComponent;
  let fixture: ComponentFixture<FmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
