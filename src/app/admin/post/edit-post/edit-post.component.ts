import { Component, OnInit ,NgModule} from '@angular/core';
import { ICategories } from 'src/app/Icategories';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { ActivatedRoute } from '@angular/router';
import { Ipost } from 'src/app/Ipost';
import {FormControl ,FormGroup,Validators} from '@angular/forms'
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { Itag } from 'src/app/Itag';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  categories : ICategories[]
  tags :Itag[]
  post : Ipost
  selectedtag = [] 
  selectedTags
  selectedCategory
  updateForm : FormGroup=new FormGroup({
    Title:new FormControl('',Validators.required),
    Body:new FormControl('',[Validators.required]),
    categories:new FormControl(null,Validators.required),
    tags:new FormControl(null,Validators.required)     
   } )
  constructor(public bServ :BlogServService , private router:ActivatedRoute) { }
  
  ngOnInit() {

    let id= this.router.snapshot.paramMap.get('id');
    this.bServ.readtPostById(id).subscribe((data)=>{
       this.post = data
       console.log(data);
       this.updateForm.controls.categories.setValue(this.post.categories.Name)
       for (const iterator of this.post.tags) {
        this.selectedtag.push(iterator.Name)
       }
        
       this.updateForm.controls.tags.setValue(this.selectedtag)
      })


    this.bServ.readTags().subscribe(data=>{
        this.tags = data
        console.log(data);
      })

    this.bServ.readCategories().subscribe(data=>{
      this.categories =data 
      console.log(this.categories)
     })
  }
  get f() { return this.updateForm.controls; }
  
  update()
  { 
    // this.post.Title=this.updateForm.controls.Title.value
    // this.post.Body=this.updateForm.controls.Body.value
    // this.post.categories= this.updateForm.value.categories
    // this.post.tags=this.updateForm.controls.tags.value
    console.log(this.post )
    this.post =this.updateForm.value as Ipost
    console.log(this.updateForm.value)
    console.log(this.post )

    // this.bServ.updatePosts(this.post).subscribe( data =>console.log(this.post))

  
}
}
