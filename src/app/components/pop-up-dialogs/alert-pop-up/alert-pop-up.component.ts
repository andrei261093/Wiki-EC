import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material";

@Component({
  selector: 'app-alert-pop-up',
  templateUrl: './alert-pop-up.component.html',
  styleUrls: ['./alert-pop-up.component.scss']
})
export class AlertPopUpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialog: Object) {
  }

  ngOnInit() {
  }
}
