import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule, NgFor],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: -34.61850351590013, lng: -58.53289478930845 };
  zoom = 16;
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: -34.61850351590013, lng: -58.53289478930845 }
  ];
}
