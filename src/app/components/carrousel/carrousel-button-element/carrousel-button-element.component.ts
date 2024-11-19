import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel-button-element',
  standalone: true,
  imports: [],
  templateUrl: './carrousel-button-element.component.html',
  styleUrl: './carrousel-button-element.component.css'
})
export class CarrouselButtonElementComponent {
 @Input() buttonElement!: number;
}
