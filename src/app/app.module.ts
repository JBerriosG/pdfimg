import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/admin/list-products/list-products.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { LedComponent } from './components/categorias/led/led.component';
import { FotoSensoresComponent } from './components/categorias/foto-sensores/foto-sensores.component';
import { AlarmasComponent } from './components/categorias/alarmas/alarmas.component';
import { TablerosComponent } from './components/categorias/tableros/tableros.component';
import { UsoGeneralComponent } from './components/categorias/uso-general/uso-general.component';
import { FuentesComponent } from './components/categorias/fuentes/fuentes.component';
import { TecnologiaComponent } from './components/categorias/tecnologia/tecnologia.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    DetailsProductComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    NosotrosComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    LedComponent,
    FotoSensoresComponent,
    AlarmasComponent,
    TablerosComponent,
    UsoGeneralComponent,
    FuentesComponent,
    TecnologiaComponent,
    GaleriaComponent,
    FilterPipe,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
