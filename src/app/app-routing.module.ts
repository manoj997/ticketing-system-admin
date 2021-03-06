import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'c-login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'c-login', loadChildren: './pages/c-login/c-login.module#CLoginPageModule' },
  { path: 'admin', loadChildren: './pages/admin/admin/admin.module#AdminPageModule' },  { path: 'edit-time-table-modal', loadChildren: './pages/edit-time-table-modal/edit-time-table-modal.module#EditTimeTableModalPageModule' },

  

  

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
