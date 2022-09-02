import { Posts } from '../../classes/posts';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent{
  constructor(public activeModal:NgbActiveModal) {

  }

  passBack(){
    this.activeModal.close();
  }
}
