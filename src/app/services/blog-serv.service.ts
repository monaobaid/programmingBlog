import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams, HttpHeaders } from '@angular/common/http';
import {ICategories} from '../Icategories'
import {Observable} from 'rxjs'
import { Ipost } from '../Ipost';
import {Iuser} from '../IUser';
import {Icomment}  from '../Icomment';
import { Itag } from '../Itag';

@Injectable({
  providedIn: 'root'
})
export class BlogServService {
  //----------HTTPClinet ------------- 
  constructor(private http:HttpClient) { }
  urlCate="http://localhost:1337/categories";
  urlPosts="http://localhost:1337/posts";
  urlTags="http://localhost:1337/tags";
  urlUser="http://localhost:1337/users";
  urlComment="http://localhost:1337/comments";

  
  //---------- Categories CRUD -------------

  createCategories(obj:ICategories):Observable<ICategories>{
      
    return this.http.post<ICategories >(this.urlCate,obj)
  }

  readCategories():Observable<ICategories[]>{
    return this.http.get<ICategories[]>(this.urlCate)
     }

  readCategoryById(id ):Observable<ICategories>{
      return this.http.get<ICategories>(`${this.urlCate}/${id}`)
    }
 
  updateCategories(data:ICategories):Observable<ICategories>{

    return this.http.put<ICategories>(`${this.urlCate}/${data._id}`, data)
    
    }

  deleteCategories(id:number): Observable<ICategories> {
    
      return this.http.delete<ICategories>(`${this.urlCate}/${id}`)
    }

 //---------- Posts CRUD -------------

   
    createPost(obj:Ipost):Observable<Ipost>{
      
     return this.http.post<Ipost >(this.urlPosts,obj)
    } 
    readPosts():Observable<Ipost[]>{
      return this.http.get<Ipost[]>(this.urlPosts)
    }
    
    readtPostById(id ):Observable<Ipost>{
      return this.http.get<Ipost>(`${this.urlPosts}/${id}`)
    }

    updatePosts(data:Ipost):Observable<Ipost>{
      return this.http.put<Ipost>(`${this.urlPosts}/${data._id}`, data)
      console.log(data)
      
      }
    deletePosts(id:string): Observable<Ipost> {
    
      return this.http.delete<Ipost>(`${this.urlPosts}/${id}`)
    }  
    
    postsPublished(published: string ): Observable<Ipost[]>
    {
  let httpParams=new HttpParams().set('Published',published)
  console.log(httpParams.toString())
  return this.http.get<Ipost[]>(this.urlPosts,{params:httpParams})
   }

postsSearch(title: string): Observable<Ipost[]>
{
  let httpParams=new HttpParams().set('Title',title)
  console.log(httpParams.toString())
  return this.http.get<Ipost[]>(this.urlPosts,{params:httpParams})

}
   
  //---------- Tags CRUD -------------
  
    createTags(obj :Itag):Observable<Itag>
    {
    return this.http.post<Itag >(this.urlTags,obj)
    }
    readTags():Observable<Itag[]>{
     return this.http.get<Itag[]>(this.urlTags)

    }

    readTagById(id ):Observable<Itag>{
      return this.http.get<Itag>(`${this.urlTags}/${id}`)
    }
 
    updateTag(data:Itag):Observable<Itag>{

    return this.http.put<Itag>(`${this.urlTags}/${data._id}`, data)
    
    }

    deleteTags (id:number):Observable<Itag> {
    
    return this.http.delete<Itag>(`${this.urlTags}/${id}`)
    
    } 
    
    
 //---------- Users  CRUD -------------

  readUser():Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.urlUser)
  }

  deleteUser (id:number): Observable<Iuser> {
    
    return this.http.delete<Iuser>(`${this.urlUser}/${id}`)
    
  } 

//---------- Comments CRUD -------------

  readComment():Observable<Icomment[]>{
    return this.http.get<Icomment[]>(this.urlComment)
  }

  deleteComment (id:number): Observable<Icomment> {
    
  return this.http.delete<Icomment>(`${this.urlComment}/${id}`)
  
} 


}