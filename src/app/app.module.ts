import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherViewComponent } from './other-view/other-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DocumenteComponent } from './documente/documente.component';
import { PostsComponent } from './posts/posts.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule} from "@angular/common/http";
import { MaterialModule } from "./material";
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SideFiltersComponent } from './side-filters/side-filters.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { AddCommentInputComponent } from './add-comment-input/add-comment-input.component';
import { LogInComponent } from './autentification/log-in/log-in.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherViewComponent,
    NavBarComponent,
    DocumenteComponent,
    PostsComponent,
    NewPostFormComponent,
    SideFiltersComponent,
    PostCommentsComponent,
    AddCommentInputComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
