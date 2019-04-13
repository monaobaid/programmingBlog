import { Component, OnInit } from '@angular/core';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { ICategories } from 'src/app/Icategories';
import { ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {
   category :ICategories
   id 
   categoryName :string
  constructor(public bServ :BlogServService , private router:ActivatedRoute , private toastr: ToastrService) { }

  ngOnInit() {
    let id= this.router.snapshot.paramMap.get('id');
    this.bServ.readCategoryById(id).subscribe((data)=>{
       this.category = data
       console.log(data);
     })

  }
  
    update()
    {
     this.category.Name=this.categoryName
    
    this.bServ.updateCategories(this.category).subscribe( data=>{
      console.log(data)
      this.toastr.success("Edited successed","",{timeOut	:3000})
       }
       )
    }

 
}
