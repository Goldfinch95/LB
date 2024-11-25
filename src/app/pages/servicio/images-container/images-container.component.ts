import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-images-container',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './images-container.component.html',
  styleUrl: './images-container.component.css'
})
export class ImagesContainerComponent {

  example: string = './assets/img/consultoria/logistica_1.png';
  example2: string = './assets/img/consultoria/logistica_2.png';
}
