import {ICategories} from  'src/app/Icategories';
import { Component, OnInit } from '@angular/core';
import { BlogServService } from 'src/app/services/blog-serv.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorires=[];
  data :ICategories;
  constructor( public bServ: BlogServService , private router : Router , private toastr: ToastrService) { }

  ngOnInit() {
    
      this.bServ.readCategories().subscribe(data=>{
       this.categorires=data 
       console.log(this.categorires)
      })
    
  }
  delete(data)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able undo',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        // Swal.fire(
          
        //   'Deleted!',
        //   'success'
        // )
      this.bServ.deleteCategories(data._id).subscribe(()=>{
            this.toastr.success("Deleted successed","",{timeOut	:3000})
            this.bServ.readCategories().subscribe(data=>{
              this.categorires=data })
           
          })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled'
        )
      }
    })
    
  }

  updateCategory(id)
  {
    this.router.navigate(['/Admin/Categories',id])
  }
}
