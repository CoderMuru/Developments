import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FieldInputComponent } from '../Components/field-input/field-input.component';
import { ButtonNormalComponent } from '../Components/button-normal/button-normal.component';
import { ButtonIconComponent } from '../Components/button-icon/button-icon.component';


@NgModule({
  declarations: [FieldInputComponent, ButtonNormalComponent, ButtonIconComponent],
  imports: [CommonModule, IonicModule],
  exports: [FieldInputComponent, ButtonNormalComponent, ButtonIconComponent],
})
export class FieldsModule {}
