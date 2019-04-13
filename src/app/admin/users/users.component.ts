import { Component, OnInit } from '@angular/core';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users=[];
  constructor(public bServ : BlogServService , private toastr: ToastrService) { }

  ngOnInit() {
    this.bServ.readUser().subscribe(data=>{
      this.users=data
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
        this.bServ.deleteUser(data._id).subscribe(()=>{
      this.toastr.success("Edited successed","",{timeOut	:3000} )
      this.bServ.readUser().subscribe(data=>{
        this.users=data })
     
    })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled'
        )
      }
    })

    
  }
  


}