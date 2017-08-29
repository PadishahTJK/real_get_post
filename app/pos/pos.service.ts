import {Injectable} from "@angular/core";
import {PosUser} from "./pos.user";
import {Http,Response} from "@angular/http"; 

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import{PosComponent} from "./pos.component";

@Injectable()

export class PosService{

 private _url = "https://jsonplaceholder.typicode.com/posts";


   

   constructor (private _http: Http){}



   getElements(): Observable<PosUser[]>{
       
       return this._http.get(this._url)
       .map((response:Response)  => <PosUser[]> response.json().data)
       .do(data => console.log('All: '+ JSON.stringify(data)));

   }//getElements


}
