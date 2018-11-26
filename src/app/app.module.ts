import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OtherViewComponent } from './components/other-view/other-view.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DocumenteComponent } from './components/documente/documente.component';
import { PostsComponent } from './components/posts/posts.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule} from "@angular/common/http";
import { MaterialModule } from "./material";
import { NewPostFormComponent } from './components/new-post-form/new-post-form.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SideFiltersComponent } from './components/side-filters/side-filters.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { AddCommentInputComponent } from './components/add-comment-input/add-comment-input.component';
import { LogInComponent } from './components/autentification/log-in/log-in.component';
import { AuthGuard } from "./guards/auth.guard";
import { AlertPopUpComponent } from './components/pop-up-dialogs/alert-pop-up/alert-pop-up.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { InputDialogComponent } from './components/pop-up-dialogs/input-dialog/input-dialog.component';



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
    AlertPopUpComponent,
    EditProfileComponent,
    InputDialogComponent,
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
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    AlertPopUpComponent
  ],
  entryComponents: [
    AlertPopUpComponent,
    InputDialogComponent
  ]
})

export class AppModule { }
