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
var oshibka_service_1 = require("./oshibka.service");
var OshibkaComponent = (function () {
    function OshibkaComponent(_oshibkaServ) {
        this._oshibkaServ = _oshibkaServ;
        this.users = [];
    }
    OshibkaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._oshibkaServ.getUsers()
            .subscribe(function (data) { return _this.users = data; }, function (error) { _this.error = error; console.log(error); });
    }; //ngOnInit
    return OshibkaComponent;
}()); //export class
OshibkaComponent = __decorate([
    core_1.Component({
        selector: 'oshibka',
        template: "<div>\n                   {{error}}            \n              </div>",
        providers: [oshibka_service_1.OshibkaService]
    }),
    __metadata("design:paramtypes", [oshibka_service_1.OshibkaService])
], OshibkaComponent);
exports.OshibkaComponent = OshibkaComponent;
//# sourceMappingURL=oshibka.component.js.map