import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  uri = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  addpost(post_title, post_content) {
    const obj = {
      post_title,
      post_content,

    };
    console.log(obj);
    this.http.post(`${this.uri}/addpost`, obj)
        .subscribe(res => console.log('Done'));
  }
}
