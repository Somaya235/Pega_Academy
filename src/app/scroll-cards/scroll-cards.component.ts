import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-scroll-cards',
  standalone: true,
  imports: [NgFor],
  templateUrl: './scroll-cards.component.html',
  styleUrls: ['./scroll-cards.component.scss']
})
export class ScrollCardsComponent {
  animationState = 'running';

  cards = [
    {
      highlight: 'AI-POWERED DEVELOPMENT',
      title: `Accelerate <strong>software delivery</strong>`,
      description: `with AI services and custom ML models. Deploy smart applications quickly and at scale.`
    },
    {
      highlight: 'COMPLETE CLOUD CHOICE',
      title: `Use <strong>single-click deployment to any cloud</strong>`,
      description: `high availability, robust security, and maximum reliability.`
    },
    {
      highlight: 'FLEXIBLE INTEGRATION',
      title: `Easily <strong>connect apps & data</strong>`,
      description: `with open APIs, connectors, and prebuilt integrations.`
    },
    {
      highlight: 'FULL-LIFECYCLE MANAGEMENT',
      title: `<strong>Manage app lifecycle</strong> from development to monitoring`,
      description: `with automated deployment & version control.`
    },
    {
      highlight: 'SCALABLE ARCHITECTURE',
      title: `Build <strong>enterprise-grade</strong> solutions`,
      description: `that scale seamlessly with your business needs.`
    }
  ];

  pauseAnimation() {
    this.animationState = 'paused';
  }
  resumeAnimation() {
    this.animationState = 'running';
  }
}
