import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { AjaxService } from './services/ajax.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormatterService } from './services/formatter.service';
import { ValidatorService } from './services/validator.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule
  ],
  exports: [
    ComponentsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AjaxService,
        AuthService,
        FormatterService,
        ValidatorService
      ]
    };
  }
}
