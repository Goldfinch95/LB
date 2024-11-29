import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  private windowWidthSubject: BehaviorSubject<number>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verificar si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Solo accedemos a window en el navegador
      this.windowWidthSubject = new BehaviorSubject<number>(window.innerWidth);

      fromEvent(window, 'resize')
        .pipe(debounceTime(200)) // Retrasa la ejecución para evitar que se ejecute demasiado rápido
        .subscribe(() => this.windowWidthSubject.next(window.innerWidth));
    } else {
      // En el servidor, inicializamos con un valor predeterminado
      this.windowWidthSubject = new BehaviorSubject<number>(1024); // Por ejemplo, 1024px
    }
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
