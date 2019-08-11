import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../../shared/service/post.service';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'first post', content: 'This is the first posts content' },
  //   { title: 'second post', content: 'This is the second posts content' },
  //   { title: 'Third post', content: 'This is the third posts content' }
  // ];

  constructor(public postsService: PostService) { }
  posts: Post[] = [];
  private postsSub: Subscription;

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
