import {Component} from "@angular/core";
import {GeService} from "./ge.service";
import {User} from "./user";


@Component({
    selector: 'get-c',
    template:`<div class="jumbotron">
    <pre>
                <ol>
                <ul *ngFor = "let U of _users">
                
                <p>{{U?.userId}}</p>
                <p>{{U?.id}}</p>
                <p>{{U?.title}}</p>
                <p>{{U?.body}}</p>
                </ul>
                
                </ol>
                <button  (click)="Req()">Get Request with Observable</button>
         </pre>
              </div>`,
     providers:[GeService]         
})

 export class GgComponent {

   errorMessage: string;

   _users: User[] =[];
    
    constructor(private _geS : GeService){}
   
   Req(){
     this._geS.getData().subscribe(_users =>this._users =_users,
                                    error =>this.errorMessage = <any>error   );
                                                            
                                                         
   }
    
 
 }//Export class