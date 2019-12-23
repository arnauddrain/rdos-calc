import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'rdos',
    loadChildren: () => import('./rdos/rdos.module').then( m => m.RdosPageModule)
  },
  {
    path: 'ic-rdos',
    loadChildren: () => import('./ic-rdos/ic-rdos.module').then( m => m.IcRdosPageModule)
  },
  {
    path: 'mv-rdos',
    loadChildren: () => import('./mv-rdos/mv-rdos.module').then( m => m.MvRdosPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
