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
var HttpObsService = (function () {
    function HttpObsService(_http) {
        this._http = _http;
    }
    HttpObsService.prototype.getUsers = function () {
        return this._http.get('user.json').map(function (resp) {
            var usersList = resp.json().data;
            var users = [];
            for (var index in usersList) {
                console.log(usersList[index]);
                var user = usersList[index];
                users.push({ name: user.userName, age: user.userAge });
            }
            return users;
        });
    }; //getUsers
    return HttpObsService;
}()); //HttpObsService
HttpObsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpObsService);
exports.HttpObsService = HttpObsService;
//# sourceMappingURL=http.obs.service.js.map