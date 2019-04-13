import { Component, OnInit } from '@angular/core';
import { Itag } from 'src/app/Itag';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent implements OnInit {

  
  createTagName :string
  tag : Itag
 
  constructor(public bServ : BlogServService ,  private toastr: ToastrService) { }
  
  ngOnInit() {
  }

  create(){
    this.tag ={
      Name: this.createTagName
    }  as Itag

  this.bServ.createTags(this.tag).subscribe(data=>console.log(data) )
  this.toastr.success("Created successed","",{timeOut	:3000})
  this.createTagName=""

}

}
