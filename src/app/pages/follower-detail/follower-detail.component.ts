import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FollowerService } from '../../services/follower-service';
import { Follower } from '../../common/classes/follower';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowerModalContentComponent } from 'src/app/common/web-components/follower-modal-content/follower-modal-content.component';

@Component({
  selector: 'app-follower-detail',
  templateUrl: './follower-detail.component.html',
  styleUrls: ['./follower-detail.component.css']
})
export class FollowerDetailComponent implements OnInit {

  follower:Follower = {id:0};

  constructor(private route:ActivatedRoute, private service:FollowerService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>{
        let i:number = +params.get('i')!

        this.service.getAll().subscribe(
          response => {
            this.follower = (<Follower[]>response.body)[i];
          }
        )
      }
    );
  }

  openModal(){
    const modalRef = this.modalService.open(FollowerModalContentComponent);
    modalRef.componentInstance.modalFollower = this.follower;
  }

}
