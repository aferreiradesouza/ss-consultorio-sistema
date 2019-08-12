import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'offsite',
    loadChildren: './offsite/offsite.module#OffSiteModule',
    data: { breadcrumb: 'Offsite', active: 'offsite' }
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { breadcrumb: 'Início', active: 'home' }
  },
  {
    path: 'medico',
    loadChildren: './medico/medico.module#MedicoModule',
    data: { breadcrumb: 'Médico', active: 'medico' }
  },
  {
    path: 'secretaria',
    loadChildren: './secretaria/secretaria.module#SecretariaModule',
    data: { breadcrumb: 'Secretaria', active: 'secretaria' }
  },
  {
    path: 'paciente',
    loadChildren: './paciente/paciente.module#PacienteModule',
    data: { breadcrumb: 'Pacientes', active: 'paciente' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
