import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './Form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowUsersComponent } from './ShowUsers/ShowUsers.component';

@NgModule({
  imports: [
    CommonModule,
    ShowUsersComponent,
    ReactiveFormsModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
