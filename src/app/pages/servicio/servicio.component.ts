import { Component } from '@angular/core';
import { MainContainerComponent } from '../../components/layout';
import { TitleContainerComponent } from '../../components/title-container';
import { ImagesContainerComponent } from './images-container';
import { InfoContainerComponent } from './info-container';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [MainContainerComponent, TitleContainerComponent, ImagesContainerComponent, InfoContainerComponent],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent {
     title="servicio"
}
