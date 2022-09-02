import { BadInput } from '../../common/errors/bad-input';
import { PostsService } from '../../services/posts.service';
import { Component, Input, OnInit } from '@angular/core';
import { Posts } from '../../common/classes/posts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostModalContentComponent } from 'src/app/common/web-components/post-modal-content/post-modal-content.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() modalPost:Posts={id:0};
  posts: Posts[] = [];
  
  constructor(private service:PostsService,private modalService: NgbModal) {}
  
  ngOnInit(): void {
    this.service.getAll().subscribe(
      response => {
        this.posts = <Posts[]>response.body;
      }
    )
    this.modalPost = this.posts[0];
  }
  createPost(ititle:HTMLInputElement){
    let last:Posts = this.posts[this.posts.length-1];
    let post:Posts = {
      userId: Math.floor(Math.random() * (10 - 1 +1)+1) ,
      id:last.id + 1,
      title:ititle.value,
      body:'',
      editable:false
    }
    
    ititle.value = '';
    //The subscribe method uses an Observable to get the information about what to do next (required) and catch the errors. 
    // If there's no need to add a next action after the response, there's no need to use the expanded version.
    // just use subscribe({error: console.error})
    this.service.create(post).subscribe({
        next: (v) => this.posts.splice(0,0,post),
        error: (e) => {
            this.posts.splice(0,1);
            if (e instanceof BadInput) alert('Bad input error')
            else alert ('Unexpected error');
          },
        complete: () => console.info('complete')
      });
  }

  updateModalPost(){
    this.service.update(this.modalPost).subscribe({
      error: (e) => {
        if (e instanceof BadInput) alert('Bad input error')
        else alert ('Unexpected error');
      }
    })
  }
  deletePost(i:number){
    let post = this.posts[i];
    this.service.delete(post.id).subscribe({
      next: (v) => this.posts.splice(i,1),
      error: (e) => {
        this.posts.splice(i,0,post);
        if (e instanceof BadInput) alert('Bad input error')
        else alert ('Unexpected error');
      },
      complete: () => console.info('complete')
      });
  }

  openModal(iPost:Posts){
    const modalRef = this.modalService.open(PostModalContentComponent);
    modalRef.componentInstance.modalPost = iPost;
  }

}
