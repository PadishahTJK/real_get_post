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
var pos_service_1 = require("./pos.service");
var PosComponent = (function () {
    function PosComponent(_posS) {
        this._posS = _posS;
        this.Puser = [];
    }
    PosComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("PosComponent  omad");
        this._posS.getElements().subscribe(function (Puser) { return _this.Puser = Puser; });
        //   this.data = res.json();
        //((data)=>this.usER=data);
        console.log("usER " + this.Puser);
        //   (usER =>  this.usER =usER);
    }; //ngOnInit
    return PosComponent;
}()); //export class
PosComponent = __decorate([
    core_1.Component({
        selector: "pp",
        template: " \n              <div>\n               <ol>\n               <li *ngFor =\"let us of Puser\">\n               <p>n userId {{us.userId}} </p>\n               <p> Id  {{us.id}}</p>\n               <p> Title {{us.title}}</p>\n               <p>Body  {{us.body}}</p>\n               \n               </li>\n               </ol>\n              </div>\n            \n           \n             ",
        providers: [pos_service_1.PosService]
    }),
    __metadata("design:paramtypes", [pos_service_1.PosService])
], PosComponent);
exports.PosComponent = PosComponent;
//# sourceMappingURL=pos.component.js.map