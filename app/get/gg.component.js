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
var ge_service_1 = require("./ge.service");
var GgComponent = (function () {
    function GgComponent(_geS) {
        this._geS = _geS;
        this._users = [];
    }
    GgComponent.prototype.Req = function () {
        var _this = this;
        this._geS.getData().subscribe(function (_users) { return _this._users = _users; }, function (error) { return _this.errorMessage = error; });
    };
    return GgComponent;
}()); //Export class
GgComponent = __decorate([
    core_1.Component({
        selector: 'get-c',
        template: "<div class=\"jumbotron\">\n    <pre>\n                <ol>\n                <ul *ngFor = \"let U of _users\">\n                \n                <p>{{U?.userId}}</p>\n                <p>{{U?.id}}</p>\n                <p>{{U?.title}}</p>\n                <p>{{U?.body}}</p>\n                </ul>\n                \n                </ol>\n                <button  (click)=\"Req()\">Get Request with Observable</button>\n         </pre>\n              </div>",
        providers: [ge_service_1.GeService]
    }),
    __metadata("design:paramtypes", [ge_service_1.GeService])
], GgComponent);
exports.GgComponent = GgComponent;
//# sourceMappingURL=gg.component.js.map