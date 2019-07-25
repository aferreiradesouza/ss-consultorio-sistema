import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleGuideComponent } from './styleguide/styleguide.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'styleguide', component: StyleGuideComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes), SharedModule, CommonModule]
})
export class OffSiteRoutingModule { }
