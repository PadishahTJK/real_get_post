"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Item = (function () {
    // Chtobi  mi mogli pot-om ispolzovat   eti Variabli 
    function Item(purchase, price) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
    return Item;
}()); //Class ITEM
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.age = 28;
        this.items = [
            { purchase: "Bread", price: 3.5, done: false },
            { purchase: "Egg", price: 1.45, done: true },
            { purchase: "Oil", price: 30, done: false }
        ];
        //  AppComponentlog("Loaded");
        this.s = "Loaded ITEMS ";
        console.log(this.s);
    }
    AppComponent.prototype.addItem = function (purchase, price) {
        console.log("Button ");
        if (purchase == null || purchase == undefined || purchase.trim() == "") {
            return;
        }
        if (price == null || price == undefined || isNaN(price)) {
            return;
        }
        else {
            this.items.push(new Item(purchase, price));
        }
    }; // addItem  
    return AppComponent;
}()); //AppComponent
AppComponent = __decorate([
    core_1.Component({
        selector: 'purchase-app ',
        template: "\n  <!--beginning -->\n  <!-- \n            <div>\n              <p>Type  your Name</p>\n              <input [(ngModel)]=\"name\" placeholder =\"Your name\" >\n              <h3> Welcome {{name}}</h3>\n            </div>\n-->\n<br />\n <!--\n \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E userName \u0432 \u0434\u043E\u0447\u0435\u0440\u043D\u0435\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 \n \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E \u043A\u0430\u043A \u0432\u0445\u043E\u0434\u043D\u043E\u0435 \u0441 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440\u043E\u043C Input,\n  \u0442\u043E \u0432 \u0433\u043B\u0430\u0432\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0435\u0433\u043E\n   \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \n   \u0438 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0443 \u0441\u0432\u043E\u0439\u0441\u0442\u0432:\n    -->\n\n<inter [userName]=\"name\" [userAge] =\"age\"></inter>\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"number\" [(ngModel)]=\"age\" />\n<br />\n\n<child-app></child-app>\n\n    <div class=\"page-header\">\n        <h1> Shopping List </h1>\n        <p>Modulnaya Architektura Prilojeniya</p>\n    </div>\n     <div class=\"panel\">\n     <!--  NAzvanie INPUT -->\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" [(ngModel)]=\"text\" placeholder = \"Name of the Product\" />\n                </div>\n     </div>\n  <!--  ZENA INPUT -->\n<div class=\"form-group\">\n  <div class=\"col-md-6\">\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\" placeholder=\"Price of the Product\" />\n  </div>\n</div>\n<!-- Dobavit Button  i dobavlyaem method  (click)=\"addItem(text,price)\"-->\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(text,price)\">Add Product to List</button>\n                </div>\n            </div>\n        </div>\n<!-- Tut  budet  Tabliza -->\n <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Article</th>\n                    <th>Price</th>\n                    <th>Purchased</th>\n                </tr>\n            </thead>\n<!-- VUJUDI TABLIZA -->\n    <tbody>\n     <tr *ngFor=\"let item of items\">\n       <td>{{item.purchase}}</td>\n       <td>{{item.price}}</td>\n       <td><input type=\"checkbox\" [(ngModel)]=\"item.done\" /></td>\n     </tr>\n    </tbody>\n    </table>\n   </div> \n <br/><br /><br/>\n <htt></htt>\n  <br/><br /><br/>\n  <h3>Observable</h3>\n <obs></obs>\n <br/><br/><br/><br/>\n <h4>Testing  Observable Knowledge</h4>\n <test-mest></test-mest>\n <br/><br/>\n <h4>Error Handling</h4>\n <oshibka></oshibka>\n  <br/><br/>\n  <h3> Complex  request</h3>\n <complex></complex>\n <br /><br />\n <h4>Post request  with serialization</h4>\n <postt></postt>\n<br /><br />\n <h4>Sending Parameters  in POST call</h4>\n<s-p></s-p>\n<br /><br />\n <h4> Trying  with real URL </h4>\n<pp></pp>\n<br /><br />\n<simple-http></simple-http>\n <br /><br /> \n <haq-get></haq-get>\n <br /><br />\n <br />\n <get-c></get-c>    \n <br /><br />\n <br />  \n <ob-s></ob-s>\n<br /><br />\n <br />\n           ",
        styles: ["\n                   h1,h2{color:navy;}\n                   p{font-style:15px;font-family:Verdana}\n           "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map