import{Component,Input} from '@angular/core';



@Component({
    selector:'child-app',
    template :`
         <h2>All rights reserved by {{name}}</h2>

             `,
           styles:[` h2{ color:red;} `]
})


export class ChildComponent{
  name ="ChildComponent";

 
}