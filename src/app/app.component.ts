import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  hide = true;
  hide1 = true;
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      contact: ['',[Validators.required,Validators.minLength(10),
                  Validators.maxLength(10),
                  Validators.pattern("^[0-9]*$")]
                ],
      gender: [''],
      active_status: [0],
      hobbies: [''],
      city: ['', [Validators.required]],
      file: ['', ],
    });

  }
  get f1() { return this.registrationForm.controls; }
  getEmailErrorMessage() {
    if (this.registrationForm.controls.email.hasError('required')) {
      return 'You must enter an Email';
    }
    return this.registrationForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPhoneErrorMessage() {
    if (this.registrationForm.controls.contact.hasError('required')) {
      return 'You must enter a Contact Number';
    }
    return this.registrationForm.controls.contact.hasError('contact') ? 'Not a valid Contact' : '';
  }
  save(formData){
    let message="Form Saved";
    console.log("Form Value",formData);
    this.registrationForm.reset();
    this._snackBar.open(message, 'Dismiss');
  }
  // uploadFile(){

  // }
}
