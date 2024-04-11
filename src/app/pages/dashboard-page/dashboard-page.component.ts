import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
constructor(private postService:PostService){
  this.postService.getAllPosts().subscribe((posts)=> {

    console.log(posts);
    
  })
}
}
