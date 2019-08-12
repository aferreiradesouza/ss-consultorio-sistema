import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SecretariaComponent } from './secretaria.component';
import { CalendarioComponent } from '../shared/components/calendario/calendario.component';
import { CalendarioSecretariaComponent } from './calendario/calendario.component';

const routes: Routes = [
    {
        path: '', component: SecretariaComponent, children: [
            { path: 'calendario', component: CalendarioSecretariaComponent, data: { breadcrumb: 'Calendário', active: 'secretaria' } },
        ]
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes), SharedModule, CommonModule]
})
export class SecretariaRoutingModule { }
