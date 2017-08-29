import {Injectable} from  "@angular/core";
import {Http,Response} from  "@angular/http";
import {RealComponent} from "./real.component";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()


export class  RealService{

     constructor( public _http :Http){}
      
     private _url = "http://jsonplaceholder.typicode.com/posts/1";

      data: Object;
      loading:boolean;

     getData() {
        return  this._http.request(this._url);
     }//getData

}//export class