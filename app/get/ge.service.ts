import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {GgComponent} from "./gg.component";
import { User} from  "./user";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class GeService{

    _users: User[] =[];
   
    
  

    private _url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http : Http ){}

   getData(): Observable<User[]>{

       let R = this._http.get(this._url).map( (resp:Response) => <User[]> resp.json() );

      console.log(R);
           return R;
       

    //        let userList = resp.json();

    //        for(let index in userList){
    //            console.log(userList[index]);

    //          _users.push({
    //             userId
    //          }); //          

    //        }// for
        
    //    });

   }//getData()
   

}//export class