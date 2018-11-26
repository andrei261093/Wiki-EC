import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {Subscription} from 'rxjs';
import {MessageInterface, MessageService} from "../../services/message-services/message.service";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  message: any;
  subscription: Subscription;
  posts = [];
  showProgressBar: boolean = false;

  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 15];

  filters = [];

  searchText = '';

  constructor(private data: DataService, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = <MessageInterface> message;
      if (message.destination == 'PostsComponent') {
        if (message.action == 'refresh') {
          this.getPosts(0, this.pageSize);
        } else if (message.action == 'showProgressBar') {
          this.showProgressBar = true;
        } else if (message.action == 'doFilter') {
          this.filters = message.params.filters;
          this.getPosts(0, this.pageSize);
        } else if (this.message.action == 'doSearch') {
          this.searchText = message.params.searchText;
          this.getPosts(0, this.pageSize);
        }else if (this.message.action == 'updateSearchText') {
          this.searchText = message.params.searchText;
        }
      }
    });
  }

  ngOnInit() {
    this.showProgressBar = true;
    this.pageSize = 5;
    this.getPosts(0, this.pageSize);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPaginationChanged(event: PageEvent) {
    console.log(event);
    this.getPosts(event['pageIndex'], event['pageSize'])
  }

  getAllPostsDesc(page: number, size: number) {
    this.showProgressBar = true;

    this.scrollTop();

    setTimeout(() => {
      this.data.getPosts(page, size).subscribe(
        data => {
          console.log(data);
          this.posts = data['content'];
          this.keepLast5Comments();
          this.length = data['totalElements'];
          this.pageSize = data['size'];
          this.showProgressBar = false;
        }
      )
    }, 1000);
  }

  getPostsFiltered(page: number, size: number, filters) {
    this.showProgressBar = true;

    this.scrollTop();

    setTimeout(() => {
      this.data.getPostsFiltered(page, size, filters).subscribe(
        data => {
          console.log(data);
          this.posts = data['content'];
          this.length = data['totalElements'];
          this.pageSize = data['size'];
          this.showProgressBar = false;
        }
      )
    }, 1000);
  }

  getPostFromSearch(page: number, size: number, searchText: string) {
    this.showProgressBar = true;
    this.scrollTop();
    setTimeout(() => {
      this.data.getSearchedPost(page, size, searchText).subscribe(
        data => {
          this.posts = data['content'];
          this.length = data['totalElements'];
          this.pageSize = data['size'];
          this.showProgressBar = false;
        })
    }, 1000);
  }

  scrollTop() {
    var i = window.pageYOffset;
    var int = setInterval(function () {
      window.scrollTo(0, i);
      i -= 20;
      if (i <= 0) clearInterval(int);
    }, 0.01);
  }

  getPosts(page: number, size: number) {
    if (this.filters.length > 0) {
      this.getPostsFiltered(page, size, this.filters);
    } else if (this.searchText) {
      this.getPostFromSearch(page, size, this.searchText);
    } else {
      this.getAllPostsDesc(page, size);
    }
  }

  keepLast5Comments(){

    for (let post of this.posts){
      let length = post['comentarii'].length;
      if(length > 5) {
        post['comentarii'].splice(0, length - 5);
      }
    }
  }

  seteazaFiltru(subCategory: any) {
    this.sendMessage('SideFiltersComponent','setFilters', subCategory);
    this.filters = [];
    this.filters.push(subCategory);
    this.getPosts(0, this.pageSize);
  }

  sendMessage(destination: string, action: string, params: Object): void {
    this.messageService.sendMessage(destination, action, params);
  }
}
