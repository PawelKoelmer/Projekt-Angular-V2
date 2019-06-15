import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { MyValidators } from './MyValidators';
import { Router } from '@angular/router';
import { IForm } from './IForm';

@Component({
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  emailDomainValidator: any;
  phoneRegEx = '[- +()0-9]*';
  emailPattern = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  account_validation_messages = MyValidators.account_validation_messages;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: ['', Validators.pattern(this.phoneRegEx)],
      password: ['', [ Validators.required, Validators.minLength(8),
        MyValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        MyValidators.patternValidator(/[@#$%^&]/, { hasSpecialCharacters: true }),
      ]],
      confirmPassword: ['', Validators.required],
      pet: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        building: [''],
        flatNo: [''],
      }),
      consents: this.fb.group({
          newsletter: false,
          sms: false,
      }),
    }, {
        validator: MyValidators.passwordMatchValidator
    });
  }

 get name() { return this.userForm.get('name'); }
 get email() { return this.userForm.get('email'); }

 onSubmit() {
   console.log(this.userForm.valid);
   if (this.userForm.valid) {
     console.log(this.userForm.value);
     this.router.navigate(['/form/RegisterDetails'], { state: { data: this.userForm.value } });
    } else {
      return;
    }
  }
}
