import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-first-footer-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './first-footer-container.component.html',
  styleUrl: './first-footer-container.component.css'
})
export class FirstFooterContainerComponent {
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
}
