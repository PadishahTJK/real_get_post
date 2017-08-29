import { Input, Component } from "@angular/core";

@Component({
    selector:'inter',
    template:`
             <p> User name: {{userName}}</p>
             <p>User age: {{userAge}}</p>    
            
             `
   })

export class InteractionBetweenComponent{
    // vhodnii  svoestva   определение входных свойств с помощью декоратора @Input()
  @Input() userName:string;
           _userAge:number;

  //Привязка к сеттеру
  /*
  Это может быть необходимо, когда в дочернем компоненте
   надо осуществлять проверку или даже модификацию значения, 
  получаемого от главного компонента.
Например, пусть в главном компоненте устанавливается возраст пользователя:
  */

@ Input() 
set userAge(age:number){
       if(age<0){
             this._userAge =0;
       }else if(age>100){
           this._userAge = age;
       }
       else{
           this._userAge = age;
       }
}
get userAge()
{
     return this._userAge;

}

} // Setter 

