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
var http_service_1 = require("./http.service");
var HttpComponent = (function () {
    //pishem variable  k provideru to est peremennoe  i tip   Providera   chto bi mi mogli podkluchitsya  k nemu 
    function HttpComponent(_httpService) {
        this._httpService = _httpService;
        // podkluchaemsya  k nashemu  user-u
        ////едставления данных в папку app
        this.users = [];
    }
    HttpComponent.prototype.ngOnInit = function () {
        //   return this._httpService.getData().subscribe((data: Response) => this.users =data.json());
        var _this = this;
        // .subscribe   proslushivaet sobitiya  iz potoka 
        this._httpService.getData().subscribe(function (resp) {
            //Поскольку в json-файле данные
            // располагаются непосредственно в элемента data, то в коде используем свойство data для получения данных
            var userList = resp.json().data;
            console.log(userList);
            //See  what we have  inside  of data
            for (var index in userList) {
                console.log(userList[index]);
                var user = userList[index];
                // adding  to array 
                _this.users.push({ name: user.userName, age: user.userAge });
            }
        });
        // this._httpService.getData()
        //             .subscribe((resp: Response) => {
        //                 let usersList = resp.json().data;
        //                 for(let index in usersList){
        //                     console.log(usersList[index]);
        //                     let user = usersList[index];
        //                     this.users.push({name: user.userName, age: user.userAge});
        //                 }
        //             });
    }; //ngOnInit
    return HttpComponent;
}());
HttpComponent = __decorate([
    core_1.Component({
        selector: 'htt',
        template: "<div>\n    <ul>\n           <li *ngFor=\"let user of users\" >\n                 <p> Name of user : {{user?.name}}</p>\n                 <p>Age  of user {{user?.age}}</p>\n                 </li>\n                  </ul>\n                  </div>",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], HttpComponent);
exports.HttpComponent = HttpComponent;
//# sourceMappingURL=http.component.js.map