import {Student} from "./Student";

export class Post {
  private _id!: string;
  private _content!: string;
  private _date!: Date;
  private _author!: Student


  constructor(content: string, date: Date, author: Student) {
    this._content = content;
    this._date = date;
    this._author = author;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get author(): Student {
    return this._author;
  }

  set author(value: Student) {
    this._author = value;
  }
}
