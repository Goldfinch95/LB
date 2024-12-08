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
    
    if (this.carousel) {
      const myCarousel = new bootstrap.Carousel(this.carousel.nativeElement, {
        interval: 5000,  
        ride: 'carousel' 
      });
    }
  }
}
