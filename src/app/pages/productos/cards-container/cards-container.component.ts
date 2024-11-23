import { Component } from '@angular/core';
import * as productsData from '../../../../assets/products.json'
import { ProductElement } from '../models';
import { CardComponent } from '../../../components/card';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
  ProductsList: ProductElement = productsData;
}
