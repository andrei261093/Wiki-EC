import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment-input',
  templateUrl: './add-comment-input.component.html',
  styleUrls: ['./add-comment-input.component.scss']
})
export class AddCommentInputComponent implements OnInit {

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
  }

  constructor() { }

  ngOnInit() {

  }

}
