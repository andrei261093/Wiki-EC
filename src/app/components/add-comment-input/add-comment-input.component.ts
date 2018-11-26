import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {MessageService} from "../../services/message-services/message.service";
import {AlertPopUpComponent} from "../pop-up-dialogs/alert-pop-up/alert-pop-up.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-add-comment-input',
  templateUrl: './add-comment-input.component.html',
  styleUrls: ['./add-comment-input.component.scss']
})
export class AddCommentInputComponent implements OnInit {

  @Input() post;

  comment: string = '';
  showProgressBar: boolean = false;
  pannelOpened: boolean = false;

  options: Object = {
    toolbarButtons: [
      'bold',
      'italic',
      'underline',
      '|',
      'color',
      'emoticons',
      '|',
      'formatOL',
      'formatUL',
      'insertTable',
      '|'
    ],
    heightMin: 200,
    heightMax: 300,
    quickInsertButtons: ['table']
  };

  constructor(private dataService: DataService,
              private messageService: MessageService,
              public dialog: MatDialog) {
  }

  ngOnInit() {  }

  makeComment() {
    if(this.comment == ''){
      this.openDialog('Comentariul este gol!', 'Pentru a continua va rugam sa completati corpul comentariului!')
    }else{
      this.showProgressBar = true;
      this.dataService.makeAComment(this.post, this.comment).subscribe( res => {
        let params = {
          comment: res,
          postId: this.post.id
        }
        this.showProgressBar = false;
        this.pannelOpened = false;
        this.messageService.sendMessage('PostCommentsComponent', 'appendComment', params);
        this.comment = '';
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
}
