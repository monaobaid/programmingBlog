import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {HttpClientModule} from  '@angular/common/http'
import { AppRoutingModule , RoutingComponant} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './admin/post/posts/posts.component';
import { CategoriesComponent } from './admin/category/categories/categories.component';
import { CommentsComponent } from './admin/comment/comments/comments.component';
import { TagsComponent } from './admin/tag/tags/tags.component';
import { UsersComponent } from './admin/users/users.component';
import {FormsModule, ReactiveFormsModule , Validator} from '@angular/forms';
import { CreateCategoriseComponent } from './admin/category/create-categorise/create-categorise.component';
import { CreatePostComponent } from './admin/post/create-post/create-post.component';
import { CreateTagComponent } from './admin/tag/create-tag/create-tag.component';
import { EditCategoriesComponent } from './admin/category/edit-categories/edit-categories.component';
import { EditPostComponent } from './admin/post/edit-post/edit-post.component';
import { ShowPostComponent } from './admin/post/show-post/show-post.component';
import { EditTagComponent } from 'src/app/admin/tag/edit-tag/edit-tag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ModalDialogModule } from 'ngx-modal-dialog';

@NgModule({
  declarations: [
    RoutingComponant,
    AppComponent,
    HomeComponent,
    LoginComponent,
    PostComponent,
    RegisterComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    TagsComponent,
    UsersComponent,
    CreateCategoriseComponent,
    CreatePostComponent,
    CreateTagComponent,
    EditCategoriesComponent,
    EditPostComponent,
    ShowPostComponent,
    EditTagComponent,
    JwPaginationComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ModalDialogModule.forRoot(),
    CommonModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
