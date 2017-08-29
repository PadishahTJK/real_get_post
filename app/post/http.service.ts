import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
    postData(obj: User){
    //Только строка может быть отправлена в post-запросе,
    // поэтому перед отправкой переданный объект сериализуется в json. 
        const body = JSON.stringify(obj);

// с помощью заголовков { 'Content-Type': 'application/json;charset=utf-8' }
//  указываем, что именно объект json передается в запросе.        
       let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
         
        return this.http.post('post.php', body, { headers: headers })
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);}); 
    }
}