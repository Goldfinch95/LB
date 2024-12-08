import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements AfterViewInit {

  @ViewChild('carousel') carousel: ElementRef | undefined;

  ngAfterViewInit(): void {
    // Inicializar el carrusel con intervalos automáticos
    if (this.carousel) {
      const myCarousel = new bootstrap.Carousel(this.carousel.nativeElement, {
        interval: 5000,  // Intervalo de 2 segundos entre cada slide
        ride: 'carousel' // Hace que el carrusel inicie automáticamente
      });
    }
  }
}
