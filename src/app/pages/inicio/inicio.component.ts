import { Component, Input, input, OnInit} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselCardComponent } from '../../components/carousel-card/carousel-card.component';
import * as brandsData from '../../../assets/brands.json';
import { NgClass, NgFor } from '@angular/common';
import { SecondCarrouselComponent } from '../../components/second-carrousel/second-carrousel.component';
SecondCarrouselComponent

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, CarouselCardComponent, SecondCarrouselComponent, FooterComponent, NgFor,
    NgClass],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  @Input()BRANDS: any = brandsData;

  getGroupedBrands() {
    const groupSize = 3;
    const groups = [];
    for (let i = 0; i < this.BRANDS.length; i += groupSize) {
      groups.push(this.BRANDS.slice(i, i + groupSize));
    }
    return groups;
  }
}
