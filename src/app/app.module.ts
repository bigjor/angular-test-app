import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlacasListComponent } from './placas/placas-list/placas-list.component';
import { PlacasItemComponent } from './placas/placas-item/placas-item.component';
import { HomeComponent } from './components/home/home.component';
import { PlacasService } from './placas/placas.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PlacaDetailComponent } from './placas/placa-detail/placa-detail.component';
import { ToKWPipe } from './placas/to-kw.pipe';
import { FilterPlacaPipe } from './placas/filter-placa.pipe';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlacasListComponent,
    PlacasItemComponent,
    HomeComponent,
    PlacaDetailComponent,
    ToKWPipe,
    FilterPlacaPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule
  ],
  providers: [
    PlacasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
