import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-container',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './images-container.component.html',
  styleUrl: './images-container.component.css'
})
export class ImagesContainerComponent {
  @Input() images: string = '';
}
