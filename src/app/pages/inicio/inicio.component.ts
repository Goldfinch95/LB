import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselCardComponent } from '../../components/carousel-card/carousel-card.component';
import * as brandsData from '../../../assets/brands.json';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent,CarouselCardComponent,FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
