import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServService } from '../services/blog-serv.service';
import { Ipost } from '../Ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   
  post :Ipost
  constructor( public bServ :BlogServService ,private router:ActivatedRoute) { }

  ngOnInit() {
    let id= this.router.snapshot.paramMap.get('id');
    this.bServ.readtPostById(id).subscribe((data)=>{
       this.post=data
       console.log(data);
     })
  }

}
