import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ConsultoriaComponent } from './pages/consultoria/consultoria.component';
import { Servicio1Component } from './pages/consultoria/servicio-1/servicio-1.component';
import { Servicio2Component } from './pages/consultoria/servicio-2/servicio-2.component';
import { Servicio3Component } from './pages/consultoria/servicio-3/servicio-3.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'nosotros',
        component: NosotrosComponent
    },
    {
        path: 'consultoria',
        component: ConsultoriaComponent
    },
    {
        path: 'servicio_1',
        component: Servicio1Component
    },
    {
        path: 'servicio_2',
        component: Servicio2Component
    },
    {
        path: 'servicio_3',
        component: Servicio3Component
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
];
