import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselCardComponent } from '../../components/carousel-card/carousel-card.component';
import * as brandsData from '../../../assets/brands.json';
import { NgClass, NgFor } from '@angular/common';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, CarouselCardComponent, FooterComponent, NgFor,
    NgClass],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  BRANDS: any = brandsData;

  getGroupedBrands() {
    const groupSize = 3;
    const groups = [];
    for (let i = 0; i < this.BRANDS.length; i += groupSize) {
      groups.push(this.BRANDS.slice(i, i + groupSize));
    }
    return groups;
  }
}
