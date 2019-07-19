import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PostService } from '../../shared/service/post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: PostService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      post_title: ['', Validators.required ],
      post_content: ['', Validators.required ],

    });
  }
  addPost({ post_title, post_content }: { post_title; post_content; }) {
    this.bs.addpost(post_title,  post_content);
  }
  ngOnInit() {
  }

}
