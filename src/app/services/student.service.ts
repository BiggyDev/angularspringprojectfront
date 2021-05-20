import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly studentURI: string;

  constructor(private http: HttpClient) {
    this.studentURI = 'http://localhost:8080/student/'
  }

  public get() {
    return this.http.get<Student>(this.studentURI);
  }

  public getById(id: string) {
    return this.http.get<Student>(this.studentURI + id);
  }

  public getByEmail(email: string) {
    return this.http.get<Student>(this.studentURI + 'email/' + email);
  }

  public save(student: Student) {
    return this.http.post<Student>(this.studentURI, student);
  }

  public update(student: Student) {
    return this.http.put<Student>(this.studentURI, student);
  }

  public delete(id: string) {
    return this.http.delete<Student>(this.studentURI + 'delete/' + id)
  }
}
