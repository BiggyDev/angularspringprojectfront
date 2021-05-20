import {StudyDomain} from "./StudyDomain";
import {StudyCountry} from "./StudyCountry";

export class Student {
  private _id!: string;
  private _pseudo!: string;
  private _email!: string;
  private _password!: string;
  private _studyDomain!: StudyDomain;
  private _studyCountry!: StudyCountry;
  private _birthdate!: Date;
  private _friends!: Student[]

  constructor(pseudo: string, email: string, password: string, studyDomain: StudyDomain, studyCountry: StudyCountry, birthdate: Date, friends: Student[]) {
    this._pseudo = pseudo;
    this._email = email;
    this._password = password;
    this._studyDomain = studyDomain;
    this._studyCountry = studyCountry;
    this._birthdate = birthdate;
    this._friends = friends;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get studyDomain(): StudyDomain {
    return this._studyDomain;
  }

  set studyDomain(value: StudyDomain) {
    this._studyDomain = value;
  }

  get studyCountry(): StudyCountry {
    return this._studyCountry;
  }

  set studyCountry(value: StudyCountry) {
    this._studyCountry = value;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  set birthdate(value: Date) {
    this._birthdate = value;
  }

  get friends(): Student[] {
    return this._friends;
  }

  set friends(value: Student[]) {
    this._friends = value;
  }
}
