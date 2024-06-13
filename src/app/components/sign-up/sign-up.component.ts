import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private Auth: AuthService,
    private Router: Router
  ) {}

  formBody: FormGroup = this.FormBuilder.group({
    fullName: [null, [Validators.required, Validators.minLength(3)]],
    phone: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    address: [null, [Validators.required]],
    govId: [null, [Validators.required]],
  });
  handleForm() {
    if (this.formBody.status === 'VALID') {
      this.Auth.signup(this.formBody.value).subscribe({
        next: (res) => {
          console.log(res);
          this.Router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.formBody.markAllAsTouched();
    }
  }
}
/* {
  "fullName": "yehia aboulela",
  "phone": "01112438160",
  "email": "yhia.themora@gmail.com",
  "password": "Yehia@123",
  "address": "123 Main St",
  "govId": "123456789",
  "mobile": "987-654-3210",
  "role": "student"
} */
