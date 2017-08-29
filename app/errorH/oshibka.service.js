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
// import {Observable} from "rxjs/Observable";
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var OshibkaService = (function () {
    function OshibkaService(_http) {
        this._http = _http;
    }
    OshibkaService.prototype.getUsers = function () {
        return this._http.get('polzovatel.json')
            .map(function (resp) {
            //send all data into  a single variable
            var usersList = resp.json().data;
            // Empty array with the name user
            var addUsers = [];
            //loop through that data and give it to empty array
            for (var index in usersList) {
                console.log(usersList[index]);
                var user = usersList[index];
                // adding it into array 
                addUsers.push({ name: user.name, age: user.age });
            }
            return addUsers;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
        // .catch((error:any)=>{
        //     return Observable.throw(error);
        // });
    }; //getUsers
    return OshibkaService;
}()); //export class
OshibkaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OshibkaService);
exports.OshibkaService = OshibkaService;
//# sourceMappingURL=oshibka.service.js.map