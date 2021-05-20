import { Component, OnInit } from '@angular/core';
import {Student} from "../models/Student";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../services/student.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  student!: Student;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private studentS: StudentService,
              private _snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  async onSubmit() {
    this.studentS.getByEmail(this.loginForm.controls.email.value).subscribe((student: Student) => {
      if (student.password === this.loginForm.controls.password.value) {
        this._snackBar.open('E-mail reconnu !', 'OK', {
          duration: 3000
        });
      }
    })
  }

}
