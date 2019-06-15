import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './Form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowUserComponent } from './ShowUser/ShowUser.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [FormComponent,
  ShowUserComponent]
})
export class FormModule { }
