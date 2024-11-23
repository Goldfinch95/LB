import { CardsContainerComponent } from './cards-container';
import { Component } from '@angular/core';
import { ImageContainerComponent } from './image-container';
import { InfoContainerComponent } from './info-container';
import { MainContainerComponent } from '../../components/layout';
import { TitleContainerComponent } from '../../components/title-container';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardsContainerComponent, ImageContainerComponent, InfoContainerComponent, MainContainerComponent, TitleContainerComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  
  title = 'Productos';
}
