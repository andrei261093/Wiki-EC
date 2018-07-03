import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserInterface, UserService} from "../../user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
      this.userService.logUser(f['username'],f['password']).subscribe(resp => {
        var user = {} as UserInterface;
        console.log(resp)

        if(resp['error']){
          this.snackBar.open('Ati gresit username-ul sau parola!', 'Ok', {duration: 2000})
        }else{
          user.id = resp['user']['id']
          user.username = resp['user']['username']
          user.firstName = resp['user']['prenume']
          user.lastName = resp['user']['nume']
          user.rol = resp['user']['rol']

          this.userService.createUserSession(user);

          console.log(user)
          this.router.navigate(['/'])
        }
      })
  }
}
