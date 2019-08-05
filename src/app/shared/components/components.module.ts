import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ProgressComponent } from './progress/progress.component';
import { MenuComponent } from './menu/menu.component';
import { InputComponent } from './input/input.component';
import { ButtonActionComponent } from './button-action/button-action.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { CardsComponent } from './cards/cards.component';
import { TitleComponent } from './title/title.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DialogComponent } from './dialog/dialog.component';
import { IconComponent } from './icon/icon.component';
import { SharedModule } from '../shared.module';
import { AutoCompleteComponent } from './autocomplete/autocomplete.component';
import { AutoCompleteLoadingComponent } from './content-loading/autocomplete-loading/autocomplete-loading.component';

const components = [
  MenuComponent,
  ButtonComponent,
  ItemComponent,
  AlertComponent,
  ButtonGroupComponent,
  ProgressComponent,
  InputComponent,
  ButtonActionComponent,
  ButtonIconComponent,
  CollapsibleComponent,
  CardsComponent,
  TitleComponent,
  CalendarioComponent,
  DialogComponent,
  IconComponent,
  AutoCompleteComponent
];

const componentLoadings = [
  AutoCompleteLoadingComponent
];

const declarations = [...components, ...componentLoadings];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    declarations
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
