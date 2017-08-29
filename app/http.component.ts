import {Component,OnInit} from "@angular/core";
import {Response} from "@angular/http";
import {HttpService} from "./http.service";
import {User} from './user';


@Component({
    selector:'htt',
    template:`<div>
    <ul>
           <li *ngFor="let user of users" >
                 <p> Name of user : {{user?.name}}</p>
                 <p>Age  of user {{user?.age}}</p>
                 </li>
                  </ul>
                  </div>`,
    providers:[HttpService]
})



export class HttpComponent implements OnInit{

// podkluchaemsya  k nashemu  user-u
////едставления данных в папку app

  users: User[] = [];

  //pishem variable  k provideru to est peremennoe  i tip   Providera   chto bi mi mogli podkluchitsya  k nemu 
  constructor( private _httpService :HttpService){}

   ngOnInit(){
    //   return this._httpService.getData().subscribe((data: Response) => this.users =data.json());
   

   // .subscribe   proslushivaet sobitiya  iz potoka 
    this._httpService.getData().subscribe((resp: Response) =>{
        //Поскольку в json-файле данные
// располагаются непосредственно в элемента data, то в коде используем свойство data для получения данных
        let userList = resp.json().data;
        console.log(userList);
        //See  what we have  inside  of data
        for(let index in  userList){
            console.log(userList[index]);

            let user = userList[index];

            // adding  to array 
             this.users.push({name: user.userName, age: user.userAge});
        }
    } );


// this._httpService.getData()
//             .subscribe((resp: Response) => {
//                 let usersList = resp.json().data;
//                 for(let index in usersList){
//                     console.log(usersList[index]);
//                     let user = usersList[index];
//                     this.users.push({name: user.userName, age: user.userAge});
//                 }
//             });



   }//ngOnInit

}