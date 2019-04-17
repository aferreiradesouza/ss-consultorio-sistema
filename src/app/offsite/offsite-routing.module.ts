import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleGuideComponent } from './styleguide/styleguide.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: 'styleguide', pathMatch: 'full' },
    { path: 'styleguide', component: StyleGuideComponent },
];

@NgModule({
    declarations: [
        StyleGuideComponent
    ],
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes), SharedModule, CommonModule]
})
export class OffSiteRoutingModule { }
