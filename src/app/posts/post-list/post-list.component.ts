import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = [
    { title: 'first post', content: 'This is the first posts content' },
    { title: 'second post', content: 'This is the second posts content' },
    { title: 'Third post', content: 'This is the third posts content' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
