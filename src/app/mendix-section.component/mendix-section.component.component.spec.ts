import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MendixSectionComponent } from './mendix-section.component.component';

describe('MendixSectionComponent', () => {
  let component: MendixSectionComponent;
  let fixture: ComponentFixture<MendixSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MendixSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MendixSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
