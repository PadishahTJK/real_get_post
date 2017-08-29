import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { ComplexService} from './complex.service';
// import {User} from './user';
  
@Component({
    selector: 'complex',
    template: `<div *ngIf="done">{{factorial}}</div>
                <div class="form-group">
                    <label>Введите число</label>
                    <input class="form-control" type="number" name="factorial" [(ngModel)]="num" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(num)">Отправить</button>
                </div>`,
    providers: [ComplexService]
})

export class ComplexComponent { 
  
    factorial: number;
    done: boolean = false;

    constructor(private complexService: ComplexService){}
    
    submit(num: number){
        console.log(num);

        this.complexService.getFactorial(num)
                .subscribe((data) => {this.factorial=data; this.done=true;});
    }
}