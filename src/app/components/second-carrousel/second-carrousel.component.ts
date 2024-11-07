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

  /*BRANDS = [
      "../../../assets/img/second_carousel/adata.jpg",
      "../../../assets/img/second_carousel/asus.jpg",
      "../../../assets/img/second_carousel/bgh.jpg",
      "../../../assets/img/second_carousel/cisco.jpg",
      "../../../assets/img/second_carousel/dell.jpg",
      "../../../assets/img/second_carousel/epson.jpg",
      "../../../assets/img/second_carousel/fibercorp.jpg",
      "../../../assets/img/second_carousel/hasar.jpg",
      "../../../assets/img/second_carousel/hp.jpg"
    ]*/
      getGroupedBrands() {
        const groupSize = 5;
        const groups = [];
        for (let i = 0; i < this.BRANDS.length; i += groupSize) {
          groups.push(this.BRANDS.slice(i, i + groupSize));
        }
        console.log(groups)
        return groups;
      }
      constructor(){
        console.log(this.BRANDS)
        
      }
}
