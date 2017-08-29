import {Injectable} from  "@angular/core";
import {D} from "./d";
import {ObservComponent} from "./observ.component";
import{ Http,Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";



@Injectable()

 export class ObservService{

     _d: D[] =[];
    
     constructor(private _http :Http){}

     private _url ="https://jsonplaceholder.typicode.com/posts/1/comments";

     getData(): Observable<D[]>{
         let R = this._http.get(this._url)
                        .map((resp:Response) => <D[]> resp.json());

               return R;

     }//getData





} //export class