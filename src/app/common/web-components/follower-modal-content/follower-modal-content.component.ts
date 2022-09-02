import { Follower } from '../../classes/follower';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower-modal-content',
  templateUrl: './follower-modal-content.component.html',
  styleUrls: ['./follower-modal-content.component.css']
})
export class FollowerModalContentComponent{
  modalFollower:Follower = {id:0};
  constructor() { }
}
