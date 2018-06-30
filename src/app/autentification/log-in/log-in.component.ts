import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from "../../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
      this.userService.logUser('ion', 'ion').subscribe(resp => {
        this.userService.currentUser = resp
        console.log(this.userService.currentUser)
        this.router.navigate(['/'])
      })
  }
}
