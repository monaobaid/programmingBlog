import { Component, OnInit } from '@angular/core';
import {Ipost} from 'src/app/Ipost';
import { BlogServService } from 'src/app/services/blog-serv.service';
import { __importStar } from 'tslib';
import {Router} from '@angular/router';
import { Icomment } from 'src/app/Icomment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : Array<any>
  comments :Icomment[]
  pageOfItems: Array<any>
  
  constructor(public bServ:BlogServService , private router : Router)  { }
 
  ngOnInit() {
    this.bServ.readPosts().subscribe(data=>{
      this.posts=data
      console.log(data)
    })
  }
  

  update(idPost)
  {
    this.router.navigate(['/Admin/PostsUpdate',idPost])
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
        for (let comment of data.comments) {
       this.bServ.deleteComment(comment._id).subscribe((data)=>{
        console.log(data) 
       })
     }

    this.bServ.deletePosts(data._id).subscribe((data)=>{
      console.log(data)
      console.log('deleted')
      
    this.bServ.readPosts().subscribe(data=>{
      this.posts = data 
      console.log(this.posts)
     })
  })
    
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled'
        )
      }
    })
  
  }


  showPost(idPost)
  {
    this.router.navigate(['/Admin/Posts',idPost])
  }


  publishPost(post)
  {  
      post.Published=true
      this.bServ.updatePosts(post).subscribe( data =>console.log(data))

  }

  unpublishPost(post)
  {  
      post.Published=false
      this.bServ.updatePosts(post).subscribe( data =>console.log(data))
     
  }


  //pagination 
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
