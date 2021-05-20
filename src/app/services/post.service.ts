import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly postURI: string;

  constructor(private http: HttpClient) {
    this.postURI = 'http://localhost:8080/post/'
  }

  public get() {
    return this.http.get<Post>(this.postURI);
  }

  public getById(id: string) {
    return this.http.get<Post>(this.postURI + id);
  }

  public save(student: Post) {
    return this.http.post<Post>(this.postURI, student);
  }

  public update(student: Post) {
    return this.http.put<Post>(this.postURI, student);
  }

  public delete(id: string) {
    return this.http.delete<Post>(this.postURI + 'delete/' + id)
  }
}
