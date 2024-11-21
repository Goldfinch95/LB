import { Component } from '@angular/core';
import { InfoContainerComponent } from './info-container';
import { MainContainerComponent } from '../../components/layout';
import { MapComponent } from '../../components/map';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [InfoContainerComponent, MainContainerComponent, MapComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {}
