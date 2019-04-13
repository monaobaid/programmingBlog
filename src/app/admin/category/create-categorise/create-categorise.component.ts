import { Component, OnInit } from '@angular/core';
import { BlogServService } from 'src/app/services/blog-serv.service';
import {ICategories} from  'src/app/Icategories';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-categorise',
  templateUrl: './create-categorise.component.html',
  styleUrls: ['./create-categorise.component.css']
})
export class CreateCategoriseComponent implements OnInit {
  category : ICategories
  nameCategory :string
  constructor(public bServ : BlogServService , private toastr: ToastrService) { }
  
  ngOnInit() {
  }

  create(){
      this.category ={
      Name : this.nameCategory
    } as ICategories
    this.bServ.createCategories(this.category).subscribe(data=>console.log() )
    this.toastr.success("Created successed","",{timeOut	:3000})
    this.nameCategory=""

  }
}
