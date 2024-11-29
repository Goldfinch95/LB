import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeServiceService {

  private windowWidthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    // Detectar cambios en el tamaño de la ventana
    fromEvent(window, 'resize')
      .pipe(debounceTime(200)) // Retrasa la ejecución para evitar que se ejecute demasiadas veces
      .subscribe(() => this.windowWidthSubject.next(window.innerWidth));
  }

  // Observable para obtener el ancho actual de la ventana
  get windowWidth$(): Observable<number> {
    return this.windowWidthSubject.asObservable();
  }

  // Función para comprobar si el tamaño es mayor a un valor determinado
  isGreaterThan(width: number): boolean {
    return this.windowWidthSubject.getValue() > width;
  }
}
