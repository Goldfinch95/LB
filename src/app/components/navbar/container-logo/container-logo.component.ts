import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from '../../../services/window-size.service';

@Component({
  selector: 'app-container-logo',
  standalone: true,
  imports: [],
  templateUrl: './container-logo.component.html',
  styleUrl: './container-logo.component.css'
})
export class ContainerLogoComponent implements OnInit {
  isLargeScreen = false; 

  constructor(private windowSizeService: WindowSizeService) {}

  // ngOnInit para observar el tamaño de la ventana
  ngOnInit() {
    // Suscripción a los cambios del tamaño de la ventana
    this.windowSizeService.windowWidth$.subscribe((width) => {
      this.isLargeScreen = width > 750; // Determina si la pantalla es más grande que 475px
    });
  } // Propiedad para detectar si la pantalla es grande
}
