import { CarrouselComponent } from '../../components/carrousel';
import { Component } from '@angular/core';
import { MainContainerComponent } from '../../components/layout';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MainContainerComponent, CarrouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
