import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {User} from "./user";
import {Observable}  from "rxjs/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()


export class HaqiqatService {
  
  private _url= "https://jsonplaceholder.typicode.com/posts";

   Iuser: User[] =[]; 

     constructor(private _http:Http ){}

     getData(){
          return  this._http.get(this._url);
          
          //  .map((resp:Response) =>{
          //     //   Iuser.response.json()
          //     //  .do(data => console.log('All: ' +  JSON.stringify(data) ));
          // });
     }

} 