import { Component, OnInit } from '@angular/core';
import { BlogArchives } from '../../common/classes/blog-archives';

@Component({
  selector: 'app-blog-archives',
  templateUrl: './blog-archives.component.html',
  styleUrls: ['./blog-archives.component.css']
})
export class BlogArchivesComponent {
  archives: BlogArchives[]=[
    {id:1, year:2022, month:7},
    {id:2, year:2022, month:8},
    {id:3, year:2022, month:9},
    {id:4, year:2022, month:10},
    {id:5, year:2022, month:11},
    {id:6, year:2022, month:12}
  ]
  constructor() { }

}
