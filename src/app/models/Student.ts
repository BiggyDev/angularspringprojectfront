import {StudyDomain} from "./StudyDomain";
import {StudyCountry} from "./StudyCountry";

export class Student {
  id!: string;
  pseudo!: string;
  email!: string;
  password!: string;
  studyDomain!: StudyDomain;
  studyCountry!: StudyCountry;
  birthdate!: Date;

  constructor(pseudo: string, email: string, password: string, studyDomain: StudyDomain, studyCountry: StudyCountry, birthdate: Date) {
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
    this.studyDomain = studyDomain;
    this.studyCountry = studyCountry;
    this.birthdate = birthdate;
  }
}
