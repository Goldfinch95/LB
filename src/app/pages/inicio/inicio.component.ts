import { CarrouselComponent } from '../../components/carrousel';
import { Component } from '@angular/core';
import { MainContainerComponent } from '../../components/layout';
import { SecondCarrouselComponent } from '../../components/second-carrousel';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarrouselComponent, MainContainerComponent, SecondCarrouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
