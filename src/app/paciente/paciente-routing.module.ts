import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from '../shared/components/calendario/calendario.component';
import { PacienteComponent } from './paciente.component';
import { PacienteListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
    {
        path: '', component: PacienteComponent, children: [
            { path: 'listagem', component: PacienteListagemComponent, data: { breadcrumb: 'Listagem', active: 'paciente' } },
        ]
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes), SharedModule, CommonModule]
})
export class PacienteRoutingModule { }
