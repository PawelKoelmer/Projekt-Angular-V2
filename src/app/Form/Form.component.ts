import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  emailDomainValidator: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator]],
      phone: [''],
      password: [''],
      confirmPassword: [''],
      pet: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        building: [''],
        flatNo: [''],
      }),
      consents: this.fb.group({
          newsselter: [''],
          sms: [''],
      }),
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
  emailValidator(control: FormControl) {
  const email = control.value;
  const regexp = /^ [0 - 9a - zA - z.] *@[a - z]*.[a - z]{ 2, 3 }$/g;
  console.log(email);
  console.log(regexp.test(email));
  if (!(regexp.test(email))) {
        //nie wiem co zwrócić i nie do końca działa regex poprawny

    } else { return null; }
  }

}

