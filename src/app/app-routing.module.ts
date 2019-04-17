import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'offsite', pathMatch: 'full' },
  { path: 'offsite', loadChildren: './offsite/offsite.module#OffSiteModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
