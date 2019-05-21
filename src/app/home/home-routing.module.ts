import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes), SharedModule, CommonModule]
})
export class HomeRoutingModule { }
