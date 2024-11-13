import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NavbarComponent,GoogleMapsModule, NgFor, FooterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  center: google.maps.LatLngLiteral = { lat: -34.61850351590013, lng: -58.53289478930845 };
  zoom = 16;
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: -34.61850351590013, lng: -58.53289478930845 }
  ];
}
