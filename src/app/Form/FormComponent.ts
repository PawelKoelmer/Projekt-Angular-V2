import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})

export class FormComponent implements OnInit {
  userForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', [Validators.minLength(9), Validators.maxLength(9), Validators.required]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      street: [''],
      building: [''],
      flatNo: [''],
    })
  });
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
}
