import { Component } from '@angular/core';
import { CarrouselButtonElementComponent } from './carrousel-button-element';


@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CarrouselButtonElementComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  ButtonList: number[] = [0,1,2,3,4,5,6,7];
}


/*<button
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>*/