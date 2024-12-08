import { Component, OnInit } from '@angular/core';
import { MainContainerComponent } from '../../components/layout';
import { TitleContainerComponent } from '../../components/title-container';
import { ImagesContainerComponent } from './images-container';
import { InfoContainerComponent } from './info-container';
import { SharedDataService } from '../../services/shared-data.service';
import * as serviceData from '../../../assets/services.json'
import * as serviceTechData from '../../../assets/tech_services.json'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

ActivatedRoute
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
     serviceName: string = '';
    

     constructor(private sharedDataService: SharedDataService, private location: Location) {}
   
     ngOnInit(): void {
      const currentUrl = this.location.path();
      const urlSplit = currentUrl.split('/');

      const urlLastPart = urlSplit[urlSplit.length - 1];
      const foundService = serviceData.data.find((service:any) => service.card.name === urlLastPart);
      const foundTechService = serviceTechData.data.find((service:any) => service.card.name === urlLastPart);
      if(foundService){
        this.selectedService = foundService.page;
        
      }
      else if(foundTechService){
        this.selectedService = foundTechService.page;
        
      }
      else{
        
        this.selectedService = null;
      }

       /*this.selectedService = this.sharedDataService.getSelectedCard();
       console.log('Service Data:', serviceData)*/
     }
}
