import { Component, OnInit} from '@angular/core';
import { HttpObsService} from './http.obs.service';
import {User} from './user';
  

  @Component({
      selector:'obs',
      template: `<ul>
                    <li *ngFor="let user of users">
                    <p>Имя пользователя: {{user.name}}</p>
                    <p>Возраст пользователя: {{user.age}}</p>
                    </li>
                </ul>`,
    providers: [HttpObsService]

  })

  export class ObsComponent implements OnInit {
 
    users: User[] =[];

    constructor(private _hO :HttpObsService){}

     ngOnInit(){
           
           this._hO.getUsers().subscribe((data)=>this.users=data);
     }
  }