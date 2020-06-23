import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { DetailComponent } from './components/detail/detail.component';
import { NonSelectedComponent } from './components/non-selected/non-selected.component';


const routes: Routes = [
  { path: '',   redirectTo: '/pokemons', pathMatch: 'full' },
  {path: 'pokemons', component: MasterComponent },
  {path: 'pokemons/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
