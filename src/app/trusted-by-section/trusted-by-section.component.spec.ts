import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedBySectionComponent } from './trusted-by-section.component';

describe('TrustedBySectionComponent', () => {
  let component: TrustedBySectionComponent;
  let fixture: ComponentFixture<TrustedBySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedBySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedBySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
