import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { BlogServService } from '../services/blog-serv.service';
import { Ipost } from '../Ipost';
import {  Router } from '@angular/router';
import { Data } from '@angular/router';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts : Array<any>
  time  : Data  
  pageOfItems: Array<any>
  search :string

  constructor(public bServ :BlogServService ,private router:Router ,private modalService: ModalDialogService ,  private viewRef: ViewContainerRef) { }
  
  ngOnInit() {
  
    this.bServ.postsPublished('true').subscribe(data=>{
      this.posts=data
      console.log(this.posts)
    })
  }

  seeMore(idPost)
  {
    this.router.navigate(['/Post',idPost])
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

postsSearch( )
{
  this.bServ.postsSearch(this.search).subscribe(data=>
    {
      this.posts=data
    })
}
// newComment() {
//   this.modalService.openDialog(this.viewRef, {
//     title: 'Some modal title',
//     childComponent: SimpleModalComponent
		 
//   });
}


