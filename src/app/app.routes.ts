import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
NosotrosComponent
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
        path: 'contacto',
        component: ContactoComponent
    },
];
