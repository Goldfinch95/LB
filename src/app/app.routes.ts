import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ConsultoriaComponent } from './pages/consultoria/consultoria.component';
import { ServicioTecnicoComponent } from './pages/servicio-tecnico/servicio-tecnico.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServicioComponent } from './pages/servicio/servicio.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'consultoria',
    component: ConsultoriaComponent,
  },
  {
    path: 'servicio/:id',
    component: ServicioComponent,
  },
  {
    path: 'servicio_tecnico',
    component: ServicioTecnicoComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
];
