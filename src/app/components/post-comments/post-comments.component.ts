import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';

import {MessageInterface, MessageService} from "../../services/message-services/message.service";
import {DataService} from "../../services/data/data.service";
import {Subscription} from "rxjs/index";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit, OnDestroy {

  message: any;
  subscription: Subscription;

  @Input() comentarii;
  @Input() postId;

  constructor(private data: DataService, private messageService: MessageService, private userService: UserService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = <MessageInterface> message;
      if (message.destination == 'PostCommentsComponent' && message.params.postId == this.postId) {
        if (message.action == 'appendComment') {
          this.comentarii.push(message.params.comment);
        }
      }
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
