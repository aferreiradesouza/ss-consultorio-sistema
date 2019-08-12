import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../shared/components/components.module';
import { MedicoRoutingModule } from './medico-routing.module';
import { MedicoComponent } from './medico.component';
import { AgendaMedicoComponent } from './agenda/agenda.component';

const pages = [
    AgendaMedicoComponent,
    MedicoComponent
];

@NgModule({
    declarations: [
        ...pages
    ],
    imports: [
        MedicoRoutingModule,
        CommonModule,
        FormsModule,
        ComponentsModule,
        ReactiveFormsModule,
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicoModule { }
