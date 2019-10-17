import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { ListProductsComponent } from './components/admin/list-products/list-products.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';
import { FotoSensoresComponent } from './components/categorias/foto-sensores/foto-sensores.component';
import { FuentesComponent } from './components/categorias/fuentes/fuentes.component';
import { AlarmasComponent } from './components/categorias/alarmas/alarmas.component';
import { TablerosComponent } from './components/categorias/tableros/tableros.component';
import { UsoGeneralComponent } from './components/categorias/uso-general/uso-general.component';
import { LedComponent } from './components/categorias/led/led.component';
import { TecnologiaComponent } from './components/categorias/tecnologia/tecnologia.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'nosotros', component: NosotrosComponent, canActivate: [AuthGuard]},//TODO: Solo para usuarios auth.
  {path: 'contactanos', component: ContactanosComponent, canActivate: [AuthGuard]},//TODO: Solo para usuarios auth.
  {path: 'product/:id', component: DetailsProductComponent },
  {path: 'admin/list-products', component: ListProductsComponent, canActivate: [AuthGuard]},//TODO: Solo para usuarios auth.
  {path: 'user/login', component: LoginComponent },
  {path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard]},//TODO: Solo para usuarios auth.
  {path: 'user/register', component: RegisterComponent },
  {path: 'categorias/foto-sensores', component: FotoSensoresComponent},
  {path: 'categorias/fuentes', component: FuentesComponent},
  {path: 'categorias/alarmas', component: AlarmasComponent},
  {path: 'categorias/tableros', component: TablerosComponent},
  {path: 'categorias/uso-general', component: UsoGeneralComponent},
  {path: 'categorias/led', component: LedComponent},
  {path: 'categorias/tecnologia', component: TecnologiaComponent},
  {path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
