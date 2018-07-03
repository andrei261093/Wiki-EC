import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDocuments(){
    return this.http.get('http://192.168.1.34:8080/getDocuments')
  }

  getPosts(){
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("ion" + ":" + "ion"));

    return this.http.get('http://192.168.1.34:8080/getPostList', {withCredentials: true})
  }
}
