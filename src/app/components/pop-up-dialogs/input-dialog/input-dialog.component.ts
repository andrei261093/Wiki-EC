import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit {

  input: string ="";

  constructor(@Inject(MAT_DIALOG_DATA) public dialog: Object, private dialogRef: MatDialogRef<InputDialogComponent>) {
  }

  ngOnInit() {
  }

  onOkButtonClicked(){
    this.dialogRef.close({input: this.input});
  }
}
