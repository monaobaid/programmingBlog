import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Ipost } from 'src/app/Ipost';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { Iuser } from 'src/app/IUser';
import { ICategories } from 'src/app/Icategories';
import { Itag } from 'src/app/Itag';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  postId
  post : Ipost
  constructor(public bServ : BlogServService, private router:ActivatedRoute) { }

  ngOnInit() {
    let id= this.router.snapshot.paramMap.get('id');
    this.bServ.readtPostById(id).subscribe((data)=>{
       this.post=data
       console.log(data);
     })
  
    }
}
