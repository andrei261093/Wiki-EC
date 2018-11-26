import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher, MatDialog} from "@angular/material";
import {UserService} from "../../services/user/user.service";
import {InputDialogComponent} from "../pop-up-dialogs/input-dialog/input-dialog.component";
import {Router} from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  newPassword: string = '';
  confirmNewPassword: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  currentPassword: string = '';
  imageUrl: string = 'http://andrei261093.go.ro:8080/user/getAvatar';
  image: Object;

  constructor(public userService: UserService,  public dialog: MatDialog, public router: Router) { }

  ngOnInit() {
    this.firstName = this.userService.getCurrentUser()['firstName'];
    this.lastName = this.userService.getCurrentUser()['lastName'];
    this.emailFormControl.setValue(this.userService.getCurrentUser()['email']);
  }

  saveChanges(){
    const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {
        message: 'Pentru a continua avem nevoie de parola dvs curenta.',
        title: 'Introduceti parola dvs curenta'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.currentPassword = result.input;
      this.userService.updateUser(this.firstName, this.lastName, this.emailFormControl.value, this.newPassword, this.confirmNewPassword, this.currentPassword, this.image).subscribe( res =>{
        console.log(res);
        this.router.navigate(['/'])
      })
    });
  }

  onSelectFile(event){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.image = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.imageUrl = event.target['result'];
      }
    }
  }

}
