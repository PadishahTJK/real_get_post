import {Component,OnInit}  from "@angular/core";
import {TestService} from "./test.service";
import {TestUser} from "./test.user";

@Component({
    selector:"test-mest",
    template:`<div>
               <ol>
               <li *ngFor ="let user of  users">
               <p>Name of UN {{user?.userId}}</p>
               <p>Age of UA {{user?.id}}</p>
               </li>
               </ol>
              </div>`,
              providers:[TestService]
})

export class TestComponent implements  OnInit {


 constructor( private _testServ :TestService ){}
 
   users: TestUser[] =[];

   ngOnInit(){
          
          this._testServ.getUser().subscribe((data)=>this.users=data);
   }




  }