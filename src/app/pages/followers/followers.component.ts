import { combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FollowerService } from '../../services/follower-service';
import { Component, OnInit } from '@angular/core';
import { Follower } from '../../common/classes/follower';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: Follower[] = [];

  constructor(private route: ActivatedRoute, private service:FollowerService) {}

  ngOnInit(): void {
    //The option to get a snapshot should be used only if the page won't be rendered again to get new information
    let page = this.route.snapshot.queryParamMap.get('page');
    console.log(page);

    //Create the combined observable
    let combined = combineLatest([
      // Gets the required parameters on the url
      this.route.paramMap,
      // Gets the optional parameters on the url
      this.route.queryParamMap
    ])
    
    this.service.getAll().subscribe(
      response => {
        this.followers = <Follower[]>response.body;
      }
    )
  }


}
