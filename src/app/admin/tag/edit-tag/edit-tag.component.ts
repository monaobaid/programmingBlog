import { Component, OnInit } from '@angular/core';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { ActivatedRoute } from '@angular/router';
import { Itag } from 'src/app/Itag';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {
  tag :Itag
  tagName :string
  id
  constructor( public bServ:BlogServService , private router :ActivatedRoute , private toastr: ToastrService) { }

  ngOnInit() {

    let id= this.router.snapshot.paramMap.get('id');
    this.bServ.readTagById(id).subscribe((data)=>{
       this.tag = data
       console.log(data);
     })
  }

  update()
  {
   this.tag.Name=this.tagName
  
  this.bServ.updateTag(this.tag).subscribe( data=>console.log(data))
    this.toastr.success("Edited successed","",{timeOut	:3000})
      
  }

}
