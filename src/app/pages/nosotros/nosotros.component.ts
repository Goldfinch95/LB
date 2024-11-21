import { AccordionComponent } from '../../components/accordion';
import { Component } from '@angular/core';
import { MainContainerComponent } from '../../components/layout';
import { TitleContainerComponent } from '../../components/title-container';


@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [AccordionComponent, MainContainerComponent, TitleContainerComponent ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent {
  title = 'Nosotros';
}
