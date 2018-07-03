import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: 'app-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.scss']
})
export class SideFiltersComponent implements OnInit {

  categorii = new FormControl('', [Validators.required]);
  subCategorii = new FormControl('', [Validators.required]);

  categoriiList = ['Tehnic', 'Business', 'Mentenenta'];
  subCategoriiList = ['Angular', 'Java', 'PHP']

  constructor(public userService: UserService) { }

  ngOnInit() {

  }

}
