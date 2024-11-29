import { Component, OnInit } from '@angular/core';
import { MainContainerComponent } from '../../components/layout';
import { TitleContainerComponent } from '../../components/title-container';
import { ImagesContainerComponent } from './images-container';
import { InfoContainerComponent } from './info-container';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [MainContainerComponent, TitleContainerComponent, ImagesContainerComponent, InfoContainerComponent],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent implements OnInit {
     title="servicio"
     selectedService: any;

     constructor(private sharedDataService: SharedDataService) {}
   
     ngOnInit(): void {
       this.selectedService = this.sharedDataService.getSelectedCard();
     }
}
