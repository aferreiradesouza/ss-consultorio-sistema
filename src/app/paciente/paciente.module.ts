import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../shared/components/components.module';
import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';
import { PacienteListagemComponent } from './listagem/listagem.component';

const pages = [
    PacienteListagemComponent,
    PacienteComponent
];

@NgModule({
    declarations: [
        ...pages
    ],
    imports: [
        PacienteRoutingModule,
        CommonModule,
        FormsModule,
        ComponentsModule,
        ReactiveFormsModule,
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PacienteModule { }
