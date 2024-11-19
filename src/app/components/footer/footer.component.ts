import { Component } from '@angular/core';
import { FirstFooterContainerComponent } from './first-footer-container';
import { SecondFooterContainerComponent } from './second-footer-container';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FirstFooterContainerComponent, SecondFooterContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
