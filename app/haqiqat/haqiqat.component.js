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
var haqiqat_service_1 = require("./haqiqat.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var HaqiqatComponent = (function () {
    function HaqiqatComponent(_haqiqatS) {
        this._haqiqatS = _haqiqatS;
        this.Iuser = [];
    }
    HaqiqatComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this._haqiqatS.getData().subscribe(function (resp) {
            _this.Iuser = resp.json();
            //  return this.Iuser;
        });
    };
    return HaqiqatComponent;
}()); //export class
HaqiqatComponent = __decorate([
    core_1.Component({
        selector: "haq-get",
        template: "<div>\n               <h3> Big  get  JSON  </h3>\n               <ol>\n               <ul *ngFor =\"let IU of Iuser\" >\n               <p>{{IU?.userId }}</p>\n               <p>{{IU?.id}}</p>\n               <p>{{IU?.title}}</p>\n               <p>{{IU?.body}}</p>               \n               </ul>\n               </ol>\n               <button (click)=\"makeRequest()\">Make a Big JSON </button>\n             </div>",
        providers: [haqiqat_service_1.HaqiqatService]
    }),
    __metadata("design:paramtypes", [haqiqat_service_1.HaqiqatService])
], HaqiqatComponent);
exports.HaqiqatComponent = HaqiqatComponent;
//# sourceMappingURL=haqiqat.component.js.map