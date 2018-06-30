import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: Object

  constructor(private http: HttpClient, private router: Router) { }

  logUser(username: string, password: string){
    console.log(username + ' ' + password)

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/x-www-form-urlencoded');
    headers_object.append( "Cache-Control","no-cache")

    return this.http.post('http://192.168.1.34:4200/login', formData,{headers: headers_object, withCredentials: true} )
  }

  logOutUser(){
    var headers_object = new HttpHeaders();
    headers_object.append( "Cache-Control","no-cache")

    this.http.get('http://192.168.1.34:4200/clear', {headers: headers_object, withCredentials: true}).subscribe(
      resp => {
            this.currentUser = {}
            console.log(resp)
            sessionStorage.clear()
            this.router.navigate(['/login'])
      }
    )
  }
}
