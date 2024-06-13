import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private Auth: AuthService,
    private Router: Router
  ) {}

  formBody: FormGroup = this.FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });
  handleForm() {
    if (this.formBody.status === 'VALID') {
      this.Auth.login(this.formBody.value).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwt);
          this.Router.navigate(['/home']);
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
