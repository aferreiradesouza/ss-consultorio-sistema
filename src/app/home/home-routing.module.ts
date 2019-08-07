import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'agenda', component: HomeComponent, data: {breadcrumb: 'Agenda', active: 'home'} },
    { path: 'criar-consulta', component: HomeComponent, data: {breadcrumb: 'Criar consulta', active: 'home'} },
    { path: 'cancelar-consulta', component: HomeComponent, data: {breadcrumb: 'Cancelar consulta', active: 'home'} },
    { path: 'modificar-consulta', component: HomeComponent, data: {breadcrumb: 'Modificar consulta', active: 'home'} },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes), SharedModule, CommonModule]
})
export class HomeRoutingModule { }
