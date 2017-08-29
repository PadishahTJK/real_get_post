import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
// import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class ComplexService{
 
    constructor(private http: Http){ }
     
   
    getFactorial(num: number){
        return this.http.get('getFactorial.php' + num)
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);});
    }
}