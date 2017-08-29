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
var complex_service_1 = require("./complex.service");
// import {User} from './user';
var ComplexComponent = (function () {
    function ComplexComponent(complexService) {
        this.complexService = complexService;
        this.done = false;
    }
    ComplexComponent.prototype.submit = function (num) {
        var _this = this;
        console.log(num);
        this.complexService.getFactorial(num)
            .subscribe(function (data) { _this.factorial = data; _this.done = true; });
    };
    return ComplexComponent;
}());
ComplexComponent = __decorate([
    core_1.Component({
        selector: 'complex',
        template: "<div *ngIf=\"done\">{{factorial}}</div>\n                <div class=\"form-group\">\n                    <label>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E</label>\n                    <input class=\"form-control\" type=\"number\" name=\"factorial\" [(ngModel)]=\"num\" />\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-default\" (click)=\"submit(num)\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n                </div>",
        providers: [complex_service_1.ComplexService]
    }),
    __metadata("design:paramtypes", [complex_service_1.ComplexService])
], ComplexComponent);
exports.ComplexComponent = ComplexComponent;
//# sourceMappingURL=complex.component.js.map