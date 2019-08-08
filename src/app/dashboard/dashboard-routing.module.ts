import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, data: {breadcrumb: 'Dashboard', active: 'dashboard'} },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes), SharedModule, CommonModule]
})
export class DashboardRoutingModule { }
