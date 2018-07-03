import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

export interface UserInterface {
  id: Number;
  username: String;
  firstName: String;
  lastName: String;
  rol: String
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  currentUser: UserInterface;

  constructor(private http: HttpClient, private router: Router) {
  }

  logUser(username: string, password: string) {
    console.log(username + ' ' + password);

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    let headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/x-www-form-urlencoded');
    headers_object.append("Cache-Control", "no-cache");
    return this.http.post('http://192.168.1.34:8080/login', formData, {headers: headers_object, withCredentials: true});
  }

  logOutUser() {
    let headers_object = new HttpHeaders();
    headers_object.append("Cache-Control", "no-cache");

    this.http.get('http://192.168.1.34:8080/clear', {headers: headers_object, withCredentials: true}).subscribe(
      resp => {
        console.log(resp);
        this.clearUserSession();
        this.router.navigate(['/login']).then();
      }
    )
  }

  createUserSession(user: UserInterface) {
    localStorage.currentUser = JSON.stringify(user);
  }

  updateUserSession(user: UserInterface) {
    localStorage.currentUser = JSON.stringify(user);
  }

  isUserLoggedIn() {
    return localStorage.getItem('currentUser');
  }

  clearUserSession() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
    }
  }

  getCurrentUser() {
    if (localStorage.getItem('currentUser')) {
      return <UserInterface>JSON.parse(localStorage.getItem('currentUser'));
    }
    return {};
  }

}
