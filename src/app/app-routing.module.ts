import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './Form/Form.component';
import { PostsComponent } from './Posts/Posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
