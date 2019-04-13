import {Ipost} from './Ipost'

export interface Icomment{
    _id  ,
    Comment :string,
    posts :Ipost
}