import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getDocuments() {
    return this.http.get('http://192.168.1.34:8080/getDocuments')
  }

  //Posts Routes
  getPosts() {
    return this.http.get('http://192.168.1.34:8080/getPostList', {withCredentials: true})
  }
}
