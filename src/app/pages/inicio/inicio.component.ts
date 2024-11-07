import { Component} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SecondCarrouselComponent } from '../../components/second-carrousel/second-carrousel.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, CarrouselComponent, SecondCarrouselComponent, FooterComponent
    ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
}
