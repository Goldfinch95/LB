import { Component, Input } from '@angular/core';
import { Elemento } from '../../pages/productos/models';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() productElement: Elemento = {
    title: '',
    imagen: '',
    text: '',
  }
}
