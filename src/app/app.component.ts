import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FmissionComponent } from './fmission/fmission.component';
import { NavComponent } from './nav/nav.component';
import { MendixSectionComponent } from './mendix-section.component/mendix-section.component.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TrustedBySectionComponent } from './trusted-by-section/trusted-by-section.component';
import { ScrollCardsComponent } from './scroll-cards/scroll-cards.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor, FmissionComponent, NavComponent,MendixSectionComponent,TrustedBySectionComponent,ScrollCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pega_Academy';
}
