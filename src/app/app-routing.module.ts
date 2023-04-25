import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
  { path: '', component: PortfolioComponent }, //Ruta principal
  { path: 'about', component: AboutComponent },
  { path: 'terminos' , component: TerminosComponent},
  { path: 'item' , component: ItemComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
  //Totes les altres rutes que no existeixin a les anteriors
];
@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  //Mòdul per a la navegació
}