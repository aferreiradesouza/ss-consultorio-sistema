import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'offsite', loadChildren: './offsite/offsite.module#OffSiteModule', data: {title: 'Offsite'} },
  { path: 'home', loadChildren: './home/home.module#HomeModule', data: {title: 'Início'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
