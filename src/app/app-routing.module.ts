//librerias de mùdulos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

//"Menù de navegaciùn"
const app_routes: Routes = [
  { path: '', component: PortfolioComponent }, //Ruta principal "localhost:4200"
  { path: 'about', component: AboutComponent }, //"localhost:4200/about"
  { path: 'item', component: ItemComponent }, //"localhost:4200/item"
  { path: 'terminos', component: TerminosComponent }, //"localhost:4200/item"
  { path: 'project', component: ProyectosComponent }, //"localhost:4200/item"
  { path: '**', pathMatch: 'full', redirectTo: '' },
  //Totes les altres rutes que no existeixin a les anteriors
];

//Decorador para importaciones/exportaciones
@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule],
})

export class AppRoutingModule {

}