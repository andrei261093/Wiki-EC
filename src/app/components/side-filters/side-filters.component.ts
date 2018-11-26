import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {DataService} from "../../services/data/data.service";
import {MessageInterface, MessageService} from "../../services/message-services/message.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.scss']
})
export class SideFiltersComponent implements OnInit {

  message: any;
  subscription: Subscription;

  categoriesFormControl = new FormControl({value: '', disabled: false}, [Validators.required]);
  subCategoriesFormControl = new FormControl({value: '', disabled: false}, [Validators.required]);

  categoryList: Object[];
  filtersOpened: boolean = false;

  constructor(public userService: UserService, private dataService: DataService,  private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = <MessageInterface> message;
      if (message.destination == 'SideFiltersComponent') {
        if (message.action == 'setFilters') {
          let selectedSubCategories = [];
          selectedSubCategories.push(message.params);
          this.setFilters(selectedSubCategories);
        }
      }
    });
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

  doFilter(){
    let params = {
      filters: this.subCategoriesFormControl.value
    };
    this.sendMessage('PostsComponent', 'doFilter', params);
  }

  resetFilters(){
    this.categoriesFormControl.reset();
    let params = {
      filters: []
    };
    this.sendMessage('PostsComponent', 'doFilter', params);
  }

  private setFilters(selectedSubCategories: any[]) {
    for(let category of this.categoryList){
      for(let subCategory of category['subCategorii']){
        if(subCategory['id'] == selectedSubCategories[0]['id']){
          this.categoriesFormControl.setValue(category);
          let selectedSubCategory = [];
          selectedSubCategory.push(subCategory);
          this.subCategoriesFormControl.setValue(selectedSubCategory);
          this.filtersOpened = true;
        }
      }
    }
  }
}
