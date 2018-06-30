import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumenteComponent} from "./documente/documente.component";
import { PostsComponent} from "./posts/posts.component";
import { HomeComponent } from "./home/home.component";
import { LogInComponent } from "./autentification/log-in/log-in.component";

const routes: Routes = [
  {
    path: 'documente',
    component: DocumenteComponent
  },
  {
    path: 'postari',
    component: PostsComponent
  },
  {
    path: '',
    component: HomeComponent
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
