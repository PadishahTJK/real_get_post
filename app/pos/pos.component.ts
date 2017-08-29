import {Component,OnInit} from "@angular/core";
import {PosService} from "./pos.service";
import {PosUser} from "./pos.user";
import {Response} from "@angular/http";

@Component({
    selector:"pp",
    template:` 
              <div>
               <ol>
               <li *ngFor ="let us of Puser">
               <p>n userId {{us.userId}} </p>
               <p> Id  {{us.id}}</p>
               <p> Title {{us.title}}</p>
               <p>Body  {{us.body}}</p>
               
               </li>
               </ol>
              </div>
            
           
             `,
    providers:[PosService]

})

export class PosComponent implements OnInit {

   data: Object;
   loading:boolean;
   
   Puser : PosUser []=[];
   constructor( private _posS :PosService){}

  ngOnInit(){
      console.log("PosComponent  omad");
      this._posS.getElements().subscribe( Puser =>  this.Puser =Puser);
    //   this.data = res.json();
      //((data)=>this.usER=data);
      console.log("usER "+this.Puser );
      
    //   (usER =>  this.usER =usER);

    
  }//ngOnInit
}//export class