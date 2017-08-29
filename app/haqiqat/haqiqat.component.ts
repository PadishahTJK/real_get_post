import {Component,OnInit}  from "@angular/core";
import {User} from "./user";
import {HaqiqatService} from "./haqiqat.service";
import {Http,Response} from "@angular/http";

import {Observable}  from "rxjs/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
    selector:"haq-get",
    template:`<div>
               <h3> Big  get  JSON  </h3>
               <ol>
               <ul *ngFor ="let IU of Iuser" >
               <p>{{IU?.userId }}</p>
               <p>{{IU?.id}}</p>
               <p>{{IU?.title}}</p>
               <p>{{IU?.body}}</p>               
               </ul>
               </ol>
               <button (click)="makeRequest()">Make a Big JSON </button>
             </div>`,
             providers:[HaqiqatService]
})

export class HaqiqatComponent {
    
    loading:boolean;
    Iuser: User[] =[];

    constructor(private _haqiqatS: HaqiqatService) {}

    makeRequest(){

    this.loading = true;
    
      this._haqiqatS.getData().subscribe( (resp:Response) =>{
          this.Iuser = resp.json();      
 
    //  return this.Iuser;
    });
    

}//export class

