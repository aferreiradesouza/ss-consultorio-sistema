import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../shared/components/components.module';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';
import { CalendarioSecretariaComponent } from './calendario/calendario.component';

const pages = [
    CalendarioSecretariaComponent,
    SecretariaComponent
];

@NgModule({
    declarations: [
        ...pages
    ],
    imports: [
        SecretariaRoutingModule,
        CommonModule,
        FormsModule,
        ComponentsModule,
        ReactiveFormsModule,
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecretariaModule { }
