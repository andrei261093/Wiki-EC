import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from "../../services/data/data.service";
import {UserService} from "../../services/user/user.service";
import {MatDialog, MatSnackBar} from '@angular/material';
import {Router} from "@angular/router";
import {MessageService} from "../../services/message-services/message.service";
import {AlertPopUpComponent} from "../pop-up-dialogs/alert-pop-up/alert-pop-up.component";

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit {
  categoriesFormControl = new FormControl({value: '', disabled: false}, [Validators.required]);
  subCategoriesFormControl = new FormControl({value: '', disabled: false}, [Validators.required]);

  categoryList: Object[];

  options: Object = {
    toolbarButtons: [
      'fullscreen',
      'bold',
      'italic',
      'underline',
      'strikeThrough',
      'subscript',
      'superscript',
      'fontFamily',
      'fontSize',
      '|',
      'color',
      'emoticons',
      'inlineStyle',
      'paragraphStyle',
      '|',
      'paragraphFormat',
      'align',
      'formatOL',
      'formatUL',
      'outdent',
      'indent',
      'insertTable',
      '|',
      'quote',
      'insertHR',
      'undo',
      'redo',
      'clearFormatting',
      'selectAll',
      'html'],
    heightMin: 200,
    heightMax: 300,
    quickInsertButtons: ['table']
  };

  title: string = '';
  description: string = '';
  expansionOpenState: boolean = false;
  showProgressBar: boolean = false;

  constructor(public dataService: DataService, public userService: UserService, private snackBar: MatSnackBar, private router: Router, private messageService: MessageService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataService.getCategories().subscribe(resp => {
      console.log(resp);
      this.categoryList = resp as Object[];
    })
  }

  sendMessage(destination: string, action: string, params: Object): void {
    this.messageService.sendMessage(destination, action, params);
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }

  makePost() {
    console.log(this.title + ' ' + this.description + ' ' +  JSON.stringify(this.categoriesFormControl.value) + ' ' + JSON.stringify(this.subCategoriesFormControl.value));

    if(this.title == '' || this.description == '' || !this.categoriesFormControl.value || !this.subCategoriesFormControl.value){
      this.openDialog('Formular incomplet!', 'Pentru a continua va rugam sa completati toate campurile!')
    }else {
      this.showProgressBar = true;
      this.dataService.makeAPost(this.title, this.description, JSON.stringify(this.categoriesFormControl.value), JSON.stringify(this.subCategoriesFormControl.value)).subscribe(resp => {
        if (resp == true) {
          this.snackBar.open('S-a postat cu succes!', 'Ok', {duration: 2000});
          this.showProgressBar = false;
          this.expansionOpenState = false;
          this.clearNewPostFrom();
          this.messageService.sendMessage('PostsComponent', 'showProgressBar', {});
          setTimeout(() => {
            this.sendMessage('PostsComponent', 'refresh', {});
          }, 1000);
        }
      });
    }
  }

  openDialog(title, message) {
    this.dialog.open(AlertPopUpComponent, {
      data: {
        message: message,
        title: title
      }
    });
  }

  clearNewPostFrom(){
    this.title = '';
    this.description = '';
    this.subCategoriesFormControl.reset();
  }
}
