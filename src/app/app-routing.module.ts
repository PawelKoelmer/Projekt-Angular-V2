import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './Form/Form.component';
import { PostsComponent } from './Posts/Posts.component';
import { ShowUserComponent } from './Form/ShowUser/ShowUser.component';



const routes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'form/RegisterDetails', component: ShowUserComponent},
  { path: 'form', component: FormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
