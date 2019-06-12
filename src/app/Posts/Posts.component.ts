import { Component, OnInit, Output } from '@angular/core';
import { PostService } from './posts.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPost } from './IPost';
import { Router } from '@angular/router';

@Component({
  templateUrl: './Posts.component.html',
  styleUrls: ['./Posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Observable<IPost[]>;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.getPosts()
      .pipe(
        map((res) => res)
      );
  }
}
