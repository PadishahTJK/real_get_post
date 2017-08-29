import{ Component } from "@angular/core";
import{NgForm} from "@angular/forms";

export class Item{
   // 3 parameter  dodestem 
   purchase: string;
   price:  number;
   done: boolean;

// Chtobi  mi mogli pot-om ispolzovat   eti Variabli 
constructor (purchase:string,price:number){
    this.purchase = purchase;
    this.price =price;
    this.done = false;
}


}//Class ITEM


@Component({
  selector:'purchase-app ',
  template:`
  <!--beginning -->
  <!-- 
            <div>
              <p>Type  your Name</p>
              <input [(ngModel)]="name" placeholder ="Your name" >
              <h3> Welcome {{name}}</h3>
            </div>
-->
<br />
 <!--
 Поскольку свойство userName в дочернем компоненте 
 определено как входное с декоратором Input,
  то в главном компоненте мы можем его
   использовать как атрибут 
   и фактически применить привязку свойств:
    -->

<inter [userName]="name" [userAge] ="age"></inter>
<input type="text" [(ngModel)]="name" />
<input type="number" [(ngModel)]="age" />
<br />

<child-app></child-app>

    <div class="page-header">
        <h1> Shopping List </h1>
        <p>Modulnaya Architektura Prilojeniya</p>
    </div>
     <div class="panel">
     <!--  NAzvanie INPUT -->
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Name of the Product" />
                </div>
     </div>
  <!--  ZENA INPUT -->
<div class="form-group">
  <div class="col-md-6">
      <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price of the Product" />
  </div>
</div>
<!-- Dobavit Button  i dobavlyaem method  (click)="addItem(text,price)"-->
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text,price)">Add Product to List</button>
                </div>
            </div>
        </div>
<!-- Tut  budet  Tabliza -->
 <table class="table table-striped">
            <thead>
                <tr>
                    <th>Article</th>
                    <th>Price</th>
                    <th>Purchased</th>
                </tr>
            </thead>
<!-- VUJUDI TABLIZA -->
    <tbody>
     <tr *ngFor="let item of items">
       <td>{{item.purchase}}</td>
       <td>{{item.price}}</td>
       <td><input type="checkbox" [(ngModel)]="item.done" /></td>
     </tr>
    </tbody>
    </table>
   </div> 
 <br/><br /><br/>
 <htt></htt>
  <br/><br /><br/>
  <h3>Observable</h3>
 <obs></obs>
 <br/><br/><br/><br/>
 <h4>Testing  Observable Knowledge</h4>
 <test-mest></test-mest>
 <br/><br/>
 <h4>Error Handling</h4>
 <oshibka></oshibka>
  <br/><br/>
  <h3> Complex  request</h3>
 <complex></complex>
 <br /><br />
 <h4>Post request  with serialization</h4>
 <postt></postt>
<br /><br />
 <h4>Sending Parameters  in POST call</h4>
<s-p></s-p>
<br /><br />
 <h4> Trying  with real URL </h4>
<pp></pp>
<br /><br />
<simple-http></simple-http>
 <br /><br /> 
 <haq-get></haq-get>
 <br /><br />
 <br />
 <get-c></get-c>    
 <br /><br />
 <br />  
 <ob-s></ob-s>
<br /><br />
 <br />
           `,
           styles:[`
                   h1,h2{color:navy;}
                   p{font-style:15px;font-family:Verdana}
           `]
})

export class AppComponent  {


// Interaction  between Components
name:string;
age:number =28;

   items: Item[] =[
                    {purchase:"Bread",price:3.5,done:false},
                    {purchase:"Egg",price:1.45, done:true},
                    {purchase:"Oil",price:30,done:false}
                  ];


//  AppComponentlog("Loaded");
s:string = "Loaded ITEMS ";

constructor (){
  console.log(this.s);
}
 addItem(purchase:string,price:number):void {
   console.log("Button ");
   if(purchase == null || purchase == undefined || purchase .trim()==""){
     return;
   }
   if(price==null || price == undefined|| isNaN(price) ) {
     return;
   }
   else{
      this.items.push(new Item(purchase,price));
   }

  }// addItem  
}//AppComponent