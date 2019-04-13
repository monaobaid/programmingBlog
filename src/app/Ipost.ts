import { ICategories} from './Icategories'
import {Itag } from './Itag'
import {Iuser} from './IUser'
import { Icomment } from './Icomment';
import { Data } from '@angular/router';

export interface Ipost{
    _id :string ,
    Title:string,
    Body:string,
    user:Iuser,
    categories: ICategories,
    tags :Itag [],
    Published :boolean,
    comments :Icomment,
    time : Data 
}