import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './Form/Form.module';
import { PostsModule } from './Posts/Posts.module';
import { HttpClientModule } from '@angular/common/http';
import { ShowUsersComponent } from './Form/ShowUsers/ShowUsers.component';




@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormModule,
      PostsModule,
      ShowUsersComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
