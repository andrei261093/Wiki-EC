import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getDocuments() {
    return this.http.get(this.serverURL + '/getDocuments')
  }

  //Posts Routes
  getPosts() {
    return this.http.get(this.serverURL + '/getPostList', {withCredentials: true})
  }
}
