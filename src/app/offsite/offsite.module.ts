import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OffSiteRoutingModule } from './offsite-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';
import { LoginComponent } from './login/login.component';
import { StyleGuideComponent } from './styleguide/styleguide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        StyleGuideComponent,
        LoginComponent
    ],
    imports: [
        OffSiteRoutingModule,
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule.forRoot()
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OffSiteModule { }
