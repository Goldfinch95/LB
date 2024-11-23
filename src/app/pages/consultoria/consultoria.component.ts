import { CardsContainerComponent } from './cards-container';
import { Component } from '@angular/core';
import { TitleContainerComponent } from '../../components/title-container';
import { ImageContainerComponent } from './image-container';
import { InfoContainerComponent } from './info-container';
@Component({
  selector: 'app-consultoria',
  standalone: true,
  imports: [
    CardsContainerComponent,
    ImageContainerComponent,
    InfoContainerComponent,
    TitleContainerComponent,
  ],
  templateUrl: './consultoria.component.html',
  styleUrl: './consultoria.component.css',
})
export class ConsultoriaComponent {
  title = 'Consultoría';
}
