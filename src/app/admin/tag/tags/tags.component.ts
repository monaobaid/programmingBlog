import { Component, OnInit } from '@angular/core';
import { BlogServService } from 'src/app/services/blog-serv.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags=[]
  constructor(public bServ:BlogServService , private router : Router , private toastr: ToastrService) { }

  ngOnInit() {
    this.bServ.readTags().subscribe(data=>{
      this.tags=data 
      console.log(this.tags)
     })
  }

  delete(data){
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
        this.bServ.deleteTags(data._id).subscribe(()=>{
          this.toastr.success("Edited successed","",{timeOut	:3000} )
          this.bServ.readTags().subscribe(data=>{
            this.tags=data 
            console.log(this.tags)
           })
    
      })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled'
        )
      }
    })
   
}

updateTag(id)
{
  this.router.navigate(['/Admin/Tags',id])
}
}
