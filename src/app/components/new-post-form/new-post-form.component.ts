import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit {
  categorii = new FormControl('', [Validators.required]);
  subCategorii = new FormControl('', [Validators.required]);

  categoriiList = ['Tehnic', 'Business', 'Mentenenta'];
  subCategoriiList = ['Angular', 'Java', 'PHP']

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
  }

  constructor() { }

  ngOnInit() {

  }

}
