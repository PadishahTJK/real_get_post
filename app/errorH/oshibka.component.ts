import {Component,OnInit} from "@angular/core";
import {OshibkaService}  from "./oshibka.service";
import {OshibkaUser} from "./oshibka.user";
import { Response} from '@angular/http';


@Component({
    selector:'oshibka',
    template:`<div>
                   {{error}}            
              </div>`,
    providers:[OshibkaService]
})

export class OshibkaComponent  implements OnInit{

  users: OshibkaUser[] =[];
  error:any;

  constructor(private _oshibkaServ :OshibkaService){}
  
    ngOnInit(){
            this._oshibkaServ.getUsers()
            .subscribe(data =>this.users=data,
             error=>{this.error =error;console.log(error);}
            );
    }//ngOnInit
}//export class