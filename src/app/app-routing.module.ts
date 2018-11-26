import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumenteComponent} from "./components/documente/documente.component";
import { PostsComponent} from "./components/posts/posts.component";
import { HomeComponent } from "./components/home/home.component";
import { LogInComponent } from "./components/autentification/log-in/log-in.component";
import {AuthGuard} from "./guards/auth.guard";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";

const routes: Routes = [
  {
    path: 'editProfile',
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'postari',
    component: PostsComponent,
    canActivate: [AuthGuard]

  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
