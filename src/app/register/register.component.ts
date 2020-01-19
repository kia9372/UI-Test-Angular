import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerFormGroup = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });

  }

}
