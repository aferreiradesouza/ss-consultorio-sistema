import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MedicoComponent } from './medico.component';
import { AgendaMedicoComponent } from './agenda/agenda.component';

const routes: Routes = [
    {
        path: '', component: MedicoComponent, children: [
            { path: 'agenda-dia', component: AgendaMedicoComponent, data: { breadcrumb: 'Agenda do dia', active: 'medico' } },
        ]
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes), SharedModule, CommonModule]
})
export class MedicoRoutingModule { }
