import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ItemComponent,
    AlertComponent,
    ButtonGroupComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ButtonComponent,
    ItemComponent,
    AlertComponent,
    ButtonGroupComponent,
    ProgressComponent
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
