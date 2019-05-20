import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ProgressComponent } from './progress/progress.component';
import { MenuComponent } from './menu/menu.component';
import { FormatterService } from '../formatter.service';
import { ValidatorService } from '../validator.service';
import { InputComponent } from './input/input.component';
import { ButtonActionComponent } from './button-action/button-action.component';

const Components = [
  MenuComponent,
  ButtonComponent,
  ItemComponent,
  AlertComponent,
  ButtonGroupComponent,
  ProgressComponent,
  InputComponent,
  ButtonActionComponent
];

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    Components
  ],
  providers: [
    FormatterService,
    ValidatorService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
