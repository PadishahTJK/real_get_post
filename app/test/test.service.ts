import {Injectable} from "@angular/core";
import {TestUser} from "./test.user";
import {Http} from "@angular/http";
import {Response} from "@angular/http";

//adding observables
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()


export class TestService{
  
     constructor(private _http: Http){}

     getUser():Observable<TestUser[]>{
         

    //      return this._http.get("user.json").map((resp:Response)=>{  
            
    //           let userList = resp.json().data;
    //         for( let index in userList){

    //         }

             
    //      }); 
    //  }

   let users: TestUser[] =[];

    return this._http.get('https://jsonplaceholder.typicode.com/users')
                        .map((resp:Response)=>{
        
         console.log("accesss  to user json ");

         let userList = resp.json().data;
            for(let index in userList){
                     console.log(userList[index]);

                     let user = userList[index];

                     users.push({userId: user.userId,  id: user.id});

                 }
                  return users;

    }) //return  get
 }
}// export class