import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import * as brandsData from '../../../assets/brands.json';

@Component({
  selector: 'app-second-carrousel',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './second-carrousel.component.html',
  styleUrl: './second-carrousel.component.css'
})
export class SecondCarrouselComponent {
  BRANDS: any = brandsData["BRANDS"];

      getGroupedBrands() {
        const groupSize = 5;
        const groups = [];
        for (let i = 0; i < this.BRANDS.length; i += groupSize) {
          groups.push(this.BRANDS.slice(i, i + groupSize));
        }
        return groups;
      }
}
