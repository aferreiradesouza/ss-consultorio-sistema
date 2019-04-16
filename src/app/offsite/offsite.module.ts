import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OffSiteRoutingModule } from './offsite-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
    declarations: [
    ],
    imports: [
        OffSiteRoutingModule,
        CommonModule
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OffSiteModule { }
