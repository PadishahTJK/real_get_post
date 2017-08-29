import {Component,OnInit} from "@angular/core";
import { D } from "./d";
import {ObservService} from "./observ.service";




@Component({
    selector:"ob-s",
    template:`<div>
    <pre>
             <ol>
             <ul *ngFor ="let info of _d" >
             <p>{{info.postId}}</p>
             <p>{{info.id}}</p>
             <p>{{info.name}}</p>
             <p>{{info.email}}</p>
             <p>{{info.body}}</p>
             
             </ul>
             </ol>
             <button (click) ="Press()"> Getting the valuea</button>
    </pre>
              </div>`,
    providers:[ObservService]

})

export class ObservComponent {

   _d: D[] = [];

    constructor( private _observService: ObservService){}
        
       Press(){
           this._observService.getData().subscribe(_d =>this._d =_d);
       }

}//export class