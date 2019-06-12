import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.minLength(9), Validators.maxLength(9)]],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        building: [''],
        flatNo: [''],
      })
    });
  }

 get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    alert('success');
  }

}
