import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import * as productsData from '../../../assets/products.json'
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  PRODUCTS: any = productsData;

  constructor(){
    console.log(this.PRODUCTS)
  }
}
