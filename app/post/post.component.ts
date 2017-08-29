import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
  
@Component({
    selector: 'postt',
    template: `<div class="form-group">
                    <label>Имя</label>

                    <input class="form-control" name="username" [(ngModel)]="user.name" />
<p>{{user.name}}</p>
                </div>
                <div class="form-group">
                    <label>Возраст</label>
                    <input class="form-control" type="number" name="age" [(ngModel)]="user.age" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(user)">Отправить</button>
                </div>
<h5>Callback from the server</h5>
                <div *ngIf="done">
                    <div>Получено от сервера:</div>
                    <div>Имя: {{receivedUser.name}}</div>
                    <div>Возраст: {{receivedUser.age}}</div>
                </div>`,
    providers: [HttpService]
})
export class PostComponent { 
   
   // данные вводимого пользователя
    user: User=new User(); 
     
    receivedUser: User; // полученный пользователь

    done: boolean = false;

    constructor(private httpService: HttpService){}

//Na click  prosihodit 
        submit(user){
            this.httpService.postData(user)
                    .subscribe((data) => {
                this.receivedUser=data; 
                this.done=true;
        });

  }//    submit
}//export class