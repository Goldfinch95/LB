import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-servicio-3',
  standalone: true,
  imports: [NavbarComponent,RouterLink, FooterComponent],
  templateUrl: './servicio-3.component.html',
  styleUrl: './servicio-3.component.css'
})
export class Servicio3Component {

}
