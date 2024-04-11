import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any>{


  return this.http.get('http://localhost:3000/posts', {
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem('token')
    }`}
  }
  )
  }
}
