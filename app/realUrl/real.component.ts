import { Component,OnInit} from "@angular/core";
import {Http,Response} from "@angular/http";
import {RealService} from "./real.service";
import {Observable} from "rxjs/observable";
import {RealUser} from "./real.user";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector:'simple-http',
    template:`
               <h2>Basic Request</h2>
                <button type="button" (click)="makeRequest()">Make Request</button>
                <div *ngIf="loading">loading...</div>
                <pre>{{data | json}}</pre>
                <pre>
                <p>{{ realUS.userId}}</p>
                <p>{{realUS.id}}</p>
                <p>{{realUS.title}}</p>
                <p>{{realUS.body}}</p>
                </pre>
               
                <h3>Test</h3>
               
             `,
    providers:[RealService]

})


 export class RealComponent {
     
      realUS : RealUser[] =[];
      data: Object;
      loading:boolean;
    
     constructor(private realS:RealService){}

     makeRequest() {
          this.loading = true;
          
          this.realS.getData().subscribe( (resp:Response) =>{
               
                 // mi prosto sozdaem variable data  kuda  zapihivaem  vsyo
                 this.data = resp.json();
                 this.realUS =resp.json();
                 
                 this.loading = false;
           
                console.log(this.realUS);
                return this.realUS;
            
          });

        
     }
    
 

    
    


 }//export class 