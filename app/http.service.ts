import {User} from './user';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()

export class HttpService{
    //writing  DI contructor

     constructor(private http: Http){

     }
     getData(){
         return this.http.get('user.json');
     }//getData
}//HttpService