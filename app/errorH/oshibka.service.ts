import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Response} from "@angular/http";
import {OshibkaUser} from "./oshibka.user";
// import {Observable} from "rxjs/Observable";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class OshibkaService{

   constructor(private _http: Http){}

    getUsers(): Observable <OshibkaUser[]>{
     
  return   this._http.get('polzovatel.json')
               .map((resp:Response)=>{

  //send all data into  a single variable
       let usersList = resp.json().data;
   
   // Empty array with the name user
   let addUsers : OshibkaUser[] =[];    
       
       //loop through that data and give it to empty array
       for(let index in usersList){
           console.log(usersList[index]);

           let user = usersList[index];
     // adding it into array 
        addUsers.push({name: user.name,age:user.age});
    }
    return addUsers;

})
     .catch((error: any)=> { return Observable.throw(error);});

// .catch((error:any)=>{
//     return Observable.throw(error);
// });

    }//getUsers

}//export class