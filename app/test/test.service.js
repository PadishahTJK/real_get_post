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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
    }
    TestService.prototype.getUser = function () {
        //      return this._http.get("user.json").map((resp:Response)=>{  
        //           let userList = resp.json().data;
        //         for( let index in userList){
        //         }
        //      }); 
        //  }
        var users = [];
        return this._http.get('https://jsonplaceholder.typicode.com/users')
            .map(function (resp) {
            console.log("accesss  to user json ");
            var userList = resp.json().data;
            for (var index in userList) {
                console.log(userList[index]);
                var user = userList[index];
                users.push({ userId: user.userId, id: user.id });
            }
            return users;
        }); //return  get
    };
    return TestService;
}()); // export class
TestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map