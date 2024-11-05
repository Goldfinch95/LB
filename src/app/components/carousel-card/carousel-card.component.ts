import { Component } from '@angular/core';
import * as brandsData from '../../../assets/brands.json';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.css'
})
export class CarouselCardComponent {

  BRANDS: any = brandsData;
  
}


