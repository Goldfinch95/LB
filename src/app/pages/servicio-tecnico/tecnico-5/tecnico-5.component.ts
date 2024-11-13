import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-tecnico-5',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FooterComponent ],
  templateUrl: './tecnico-5.component.html',
  styleUrl: './tecnico-5.component.css'
})
export class Tecnico5Component {

}
