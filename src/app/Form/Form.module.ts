import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './Form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
