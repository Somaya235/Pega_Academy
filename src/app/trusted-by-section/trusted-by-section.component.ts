import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-trusted-by-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './trusted-by-section.component.html',
  styleUrls: ['./trusted-by-section.component.scss']
})
export class TrustedBySectionComponent {
  logos = [
    { src: 'assets/download.png', alt: 'Namespace Logo' },
    { src: 'assets/download.png', alt: 'AESSEAL Logo' },
    { src: 'assets/download.png', alt: 'Fugro Logo' },
    { src: 'assets/download.png', alt: 'KOC University Logo' },
    { src: 'assets/download.png', alt: 'Cora Global Logo' },
    { src: 'assets/download.png', alt: 'T Logo' },
    { src: 'assets/download.png', alt: 'SWICA Logo' },
    { src: 'assets/download.png', alt: 'Validata Logo' },
    { src: 'assets/download.png', alt: 'Mercury Logo' },
  ];

  testimonials = [
    {
      quote: 'We have a huge push around generative AI... Mendix is an enabler here, being a technology that can easily be incorporated with Amazon Bedrock and OpenAI.',
      name: 'Vivek Gautam',
      position: 'Mendix Platform Manager, Siemens Energy'
    },
    {
      quote: 'Mendix is a way to accelerate digitization by enabling faster development in support of our strategic objectives. We can build applications that access and visualize data more efficiently, and can therefore enhance our data-driven decision making.',
      name: 'Marco Stevens',
      position: 'Manager of Business IT Platforms, HTM'
    },
    {
      quote: 'Mendix has been one of the most pivotal decisions in our history. It has made us more connected, agile, and prepared to embrace the future. We’re not just keeping up with changes in the market anymore – we’re driving them.',
      name: 'Marcio Pinheiro',
      position: 'Architecture & Innovation Manager, Credsystem'
    }
  ];
}
