import { Component, OnInit } from '@angular/core';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
   
  constructor(public bServ : BlogServService ,  private toastr: ToastrService) { }
   // array of all items to be paged
   comments: Array<any>;

   // current page of items
   pageOfItems: Array<any>;
  ngOnInit() {
    this.bServ.readComment().subscribe(data=>{
    this.comments=data
    console.log(this.comments)
    })
  //  this.onChangePage(this.comments)
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
        this.bServ.deleteComment(data._id).subscribe(()=>{
          this.toastr.success("Deleted successed","",{timeOut	:3000})
          this.bServ.readComment().subscribe(data=>{
            this.comments=data })
         
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled'
        )
      }
    })

   
  }
  // pagination
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
