import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-products-container',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css',
})
export class ImageProductsContainerComponent {
  image: string = './assets/img/productos/productos.webp';
}
