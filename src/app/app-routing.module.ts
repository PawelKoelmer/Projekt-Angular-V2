import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './Form/Form.component';
import { PostsComponent } from './Posts/Posts.component';
import { ShowUsersComponent } from './Form/ShowUsers/ShowUsers.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'form', component: FormComponent},
  { path: 'users', component: ShowUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
