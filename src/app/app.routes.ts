import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ConsultoriaComponent } from './pages/consultoria/consultoria.component';
import { Servicio1Component } from './pages/consultoria/servicio-1/servicio-1.component';
import { Servicio2Component } from './pages/consultoria/servicio-2/servicio-2.component';
import { Servicio3Component } from './pages/consultoria/servicio-3/servicio-3.component';
import { ServicioTecnicoComponent } from './pages/servicio-tecnico/servicio-tecnico.component';
import { Tecnico1Component } from './pages/servicio-tecnico/tecnico-1/tecnico-1.component';
import { Tecnico2Component } from './pages/servicio-tecnico/tecnico-2/tecnico-2.component';
import { Tecnico3Component } from './pages/servicio-tecnico/tecnico-3/tecnico-3.component';
import { Tecnico4Component } from './pages/servicio-tecnico/tecnico-4/tecnico-4.component';
import { Tecnico5Component } from './pages/servicio-tecnico/tecnico-5/tecnico-5.component';
import { Tecnico6Component } from './pages/servicio-tecnico/tecnico-6/tecnico-6.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { Servicio4Component } from './pages/consultoria/servicio-4/servicio-4.component';
import { Servicio5Component } from './pages/consultoria/servicio-5/servicio-5.component';
import { Servicio6Component } from './pages/consultoria/servicio-6/servicio-6.component';

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
    path: 'servicio_1',
    component: Servicio1Component,
  },
  {
    path: 'servicio_2',
    component: Servicio2Component,
  },
  {
    path: 'servicio_3',
    component: Servicio3Component,
  },
  {
    path: 'servicio_4',
    component: Servicio4Component,
  },
  {
    path: 'servicio_5',
    component: Servicio5Component,
  },
  {
    path: 'servicio_6',
    component: Servicio6Component,
  },
  {
    path: 'servicio_tecnico',
    component: ServicioTecnicoComponent,
  },
  {
    path: 'instalacion_camaras_seguridad',
    component: Tecnico1Component,
  },
  {
    path: 'reparacion_tv',
    component: Tecnico2Component,
  },
  {
    path: 'almacenamiento_backup',
    component: Tecnico3Component,
  },
  {
    path: 'networking_cableado_estructurado',
    component: Tecnico4Component,
  },
  {
    path: 'virtualizacion_servicios',
    component: Tecnico5Component,
  },
  {
    path: 'licenciamiento_software',
    component: Tecnico6Component,
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
