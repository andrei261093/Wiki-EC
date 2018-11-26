import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService} from '../../services/user/user.service';
import { MessageService } from '../../services/message-services/message.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  searchText: string = '';

  constructor(public userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    let params = {
      searchText: f['searchText']
    };
    this.sendMessage('PostsComponent', 'doSearch', params);
  }

  logOut(){
    this.userService.logOutUser()
  }

  sendMessage(destination: string, action: string, params: Object): void {
    this.messageService.sendMessage(destination, action, params);
  }

  updateSearchText() {
    debugger;
    let params = {
      searchText: this.searchText
    };
    this.sendMessage('PostsComponent', 'updateSearchText', params);
  }
}
