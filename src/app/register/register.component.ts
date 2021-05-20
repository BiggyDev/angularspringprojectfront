import { Component, OnInit } from '@angular/core';
import {StudyDomain} from "../models/StudyDomain";
import {StudyCountry} from "../models/StudyCountry";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StudentService} from "../services/student.service";
import {Student} from "../models/Student";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  student!: Student;

  studyDomains = StudyDomain;
  studyCountries = StudyCountry;

  registerForm!: FormGroup;

  same!: boolean;

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private studentService: StudentService) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.registerForm = this.fb.group({
      pseudo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
      verifyPassword:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
      studyDomain: ['', [Validators.required]],
      studyCountry: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    })
  }

  isSamePassword(password: string, confirmPassword: string) {
    return password === confirmPassword;
  }

  async onSubmit() {
    this.same = await this.isSamePassword(this.registerForm.controls.password.value, this.registerForm.controls.verifyPassword.value)

    if (this.same) {
      this.student = await new Student(
        this.registerForm.controls.pseudo.value,
        this.registerForm.controls.email.value,
        this.registerForm.controls.password.value,
        this.registerForm.controls.studyDomain.value,
        this.registerForm.controls.studyCountry.value,
        this.registerForm.controls.birthday.value
      )
      this.studentService.save(this.student).subscribe((student: Student) => {
        this._snackBar.open('Inscription réussie !', 'OK', {
          duration: 3000
        });
      })
    } else {
      this._snackBar.open('Les mots de passe ne correspondent pas.', 'OK', {
        duration: 3000
      });
    }

  }

}
