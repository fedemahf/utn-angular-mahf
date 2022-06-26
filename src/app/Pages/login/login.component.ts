import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  handleLogin() {
    const email = this.loginForm.get("email")?.value;
    const password = this.loginForm.get("password")?.value;
    alert(`Login requested!\n\nEmail: ${email}\nPassword: ${password}`);
  }

  ngOnInit(): void {
  }
}
