import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlacaDetailComponent } from './placas/placa-detail/placa-detail.component';
import { PlacasListComponent } from './placas/placas-list/placas-list.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'placas', component: PlacasListComponent, canActivate: [AuthGuard]},
  {path: 'placa/:id', component: PlacaDetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
