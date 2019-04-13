import { Component, OnInit } from '@angular/core';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { ICategories } from 'src/app/Icategories';
import {FormControl ,FormGroup,Validators} from '@angular/forms'
import { Ipost } from 'src/app/Ipost';
import { Iuser } from 'src/app/IUser';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { Itag } from 'src/app/Itag';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  Categories:ICategories[]
  post:Ipost
  tags :Itag[]
  

  createForm : FormGroup=new FormGroup({
    Title:new FormControl(null,Validators.required),
    Body:new FormControl(null,[Validators.required]),
    categories:new FormControl(null,Validators.required),
    tags:new FormControl(null,Validators.required)
    
   } )
  constructor(public bServ :BlogServService) { }

  ngOnInit() {
    this.bServ.readCategories().subscribe(data=>{
      this.Categories =data 
      console.log(this.Categories)
     })

     this.bServ.readTags().subscribe(data=>{
      this.tags = data
      console.log(data);
    })

  }
//--- add new Post ----

 get f() { return this.createForm.controls; }
  create()
  {
  // this.post ={
  //   Title:this.createForm.controls.Title.value,
  //   Body:this.createForm.controls.Body.value,
  //   categories  : this.createForm.value,
  //   tags : this.createForm.value ,
  //   Published : false
  // } as Ipost


  // this.bServ.createPost(this.createForm.value).subscribe(data=>console.log(data))
  this.bServ.createPost(this.post).subscribe(data=>console.log(data))
  }

}
