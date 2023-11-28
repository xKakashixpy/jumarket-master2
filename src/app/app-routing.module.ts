import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    //canActivate: [NoIngresadoGuard]
  },
  {
    path: 'recuperarcon',
    loadChildren: () => import('./recuperarcon/recuperarcon.module').then( m => m.RecuperarconPageModule)
  },
  {
    path: 'formdieta',
    loadChildren: () => import('./formdieta/formdieta.module').then( m => m.FormdietaPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule),
   // canActivate: [IngresadoGuard]
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'cliente-add',
    loadChildren: () => import('./cliente/cliente-add/cliente-add.module').then( m => m.ClienteAddPageModule)
  },
  {
    path: 'cliente-all',
    loadChildren: () => import('./cliente/cliente-all/cliente-all.module').then( m => m.ClienteAllPageModule)
  },
  {
    path: 'cliente-detail/:idProducto',
    loadChildren: () => import('./cliente/cliente-detail/cliente-detail.module').then( m => m.ClienteDetailPageModule)
  },
  {
    path: 'cliente-edit/:idProducto',
    loadChildren: () => import('./cliente/cliente-edit/cliente-edit.module').then( m => m.ClienteEditPageModule)
  },
  {
    path: 'cliente-list',
    loadChildren: () => import('./cliente/cliente-list/cliente-list.module').then( m => m.ClienteListPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'geolocalizacion',
    loadChildren: () => import('./geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },





 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
