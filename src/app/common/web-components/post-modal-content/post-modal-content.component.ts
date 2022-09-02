import { Posts } from '../../classes/posts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-modal-content',
  templateUrl: './post-modal-content.component.html',
  styleUrls: ['./post-modal-content.component.css']
})
export class PostModalContentComponent{
  modalPost:Posts={id:0};

}
