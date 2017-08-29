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
var real_service_1 = require("./real.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var RealComponent = (function () {
    function RealComponent(realS) {
        this.realS = realS;
        this.realUS = [];
    }
    RealComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.realS.getData().subscribe(function (resp) {
            // mi prosto sozdaem variable data  kuda  zapihivaem  vsyo
            _this.data = resp.json();
            _this.realUS = resp.json();
            _this.loading = false;
            console.log(_this.realUS);
            return _this.realUS;
        });
    };
    return RealComponent;
}()); //export class 
RealComponent = __decorate([
    core_1.Component({
        selector: 'simple-http',
        template: "\n               <h2>Basic Request</h2>\n                <button type=\"button\" (click)=\"makeRequest()\">Make Request</button>\n                <div *ngIf=\"loading\">loading...</div>\n                <pre>{{data | json}}</pre>\n                <pre>\n                <p>{{ realUS.userId}}</p>\n                <p>{{realUS.id}}</p>\n                <p>{{realUS.title}}</p>\n                <p>{{realUS.body}}</p>\n                </pre>\n               \n                <h3>Test</h3>\n               \n             ",
        providers: [real_service_1.RealService]
    }),
    __metadata("design:paramtypes", [real_service_1.RealService])
], RealComponent);
exports.RealComponent = RealComponent;
//# sourceMappingURL=real.component.js.map