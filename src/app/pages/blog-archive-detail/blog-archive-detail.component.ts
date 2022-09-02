import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogArchives } from '../../common/classes/blog-archives';

@Component({
  selector: 'app-blog-archive-detail',
  templateUrl: './blog-archive-detail.component.html',
  styleUrls: ['./blog-archive-detail.component.css']
})
export class BlogArchiveDetailComponent implements OnInit{
  archive: BlogArchives={id:0, year:0, month:0}
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params =>{
        let year:number = Number(params.get('year'))
        let month:number = Number(params.get('month'))

        if (year==2022 && month<=12 && month>=6){
          this.archive.year = year;
          this.archive.month = month;
        }else{
          this.router.navigate(['**']);
        }
      }
    );  
  }
  viewAllArchives(){
    this.router.navigate(['archives']);
  }

  

}
