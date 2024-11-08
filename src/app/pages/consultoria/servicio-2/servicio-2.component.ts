import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-servicio-2',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FooterComponent ],
  templateUrl: './servicio-2.component.html',
  styleUrl: './servicio-2.component.css'
})
export class Servicio2Component {

}
