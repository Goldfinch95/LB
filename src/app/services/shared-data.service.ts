import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
BehaviorSubject
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private selectedCard: any = null; // Almacenará los datos de la carta seleccionada

  constructor() {}

  // Establecer los datos de la carta seleccionada
  setSelectedCard(data: any): void {
    this.selectedCard = data;
  }

  // Obtener los datos de la carta seleccionada
  getSelectedCard(): any {
    return this.selectedCard;
  }
// BehaviorSubject inicializado con un valor vacío o nulo
/*private selectedCardSubject = new BehaviorSubject<any>('Valor inicial');
selectedCard$ = this.selectedCardSubject.asObservable();

constructor() {}

// Método para actualizar los datos de la carta seleccionada
setSelectedCard(data: any) {
  this.selectedCardSubject.next(data);
}*/
}
