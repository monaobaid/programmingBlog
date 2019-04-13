import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './admin/post/posts/posts.component';
import { CommentsComponent } from './admin/comment/comments/comments.component';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { TagsComponent } from './admin/tag/tags/tags.component';
import { UsersComponent } from './admin/users/users.component';
import { PostComponent } from './post/post.component';
import { CategoriesComponent } from './admin/category/categories/categories.component';
import { CreateCategoriseComponent } from './admin/category/create-categorise/create-categorise.component';
import { EditCategoriesComponent } from './admin/category/edit-categories/edit-categories.component';
import { CreatePostComponent } from './admin/post/create-post/create-post.component';
import { CreateTagComponent } from './admin/tag/create-tag/create-tag.component';
import { ShowPostComponent } from './admin/post/show-post/show-post.component';
import { EditPostComponent } from './admin/post/edit-post/edit-post.component';
import { EditTagComponent } from './admin/tag/edit-tag/edit-tag.component';

const routes: Routes = [
{path:'', redirectTo:'Admin/Categories',pathMatch:'full'},
{path:'Login' , component:LoginComponent},
{path:'Register',component:RegisterComponent},
{path:'Home',component:HomeComponent},
{path:'Post/:id' , component:PostComponent},
{path:'Admin/Posts' , component:PostsComponent},
{path :'Admin/createPost' , component:CreatePostComponent },
{path:'Admin/Posts/:id' , component:ShowPostComponent},
{path:'Admin/PostsUpdate/:id' , component:EditPostComponent},
{path:'Admin/Comments' , component:CommentsComponent},
{path:'Admin/Tags' , component:TagsComponent},
{path:'Admin/createTag' , component:CreateTagComponent},
{path:'Admin/Tags/:id' , component:EditTagComponent},
{path:'Admin/Categories' , component:CategoriesComponent},
{path :'Admin/createCategories', component:CreateCategoriseComponent },
{path :'Admin/Categories/:id' , component:EditCategoriesComponent},
{path:'Admin/Users' , component : UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponant = [ 
  LoginComponent ,
   RegisterComponent,
   HomeComponent,
   PostComponent,
   PostsComponent,
   PostComponent,
   EditPostComponent,
   ShowPostComponent,
   CommentsComponent,
   TagsComponent,
   UsersComponent,
   CategoriesComponent,
   CreateCategoriseComponent,
   CreatePostComponent,
   CreateTagComponent,
   EditCategoriesComponent

]
