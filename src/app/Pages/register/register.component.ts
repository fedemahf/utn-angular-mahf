import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
  }

  handleRegister() {
    const name = this.registerForm.get("name")?.value;
    const email = this.registerForm.get("email")?.value;
    const password = this.registerForm.get("password")?.value;
    alert(`Registration requested!\n\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
  }

  ngOnInit(): void {
  }
}
