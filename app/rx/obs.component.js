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
var http_obs_service_1 = require("./http.obs.service");
var ObsComponent = (function () {
    function ObsComponent(_hO) {
        this._hO = _hO;
        this.users = [];
    }
    ObsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._hO.getUsers().subscribe(function (data) { return _this.users = data; });
    };
    return ObsComponent;
}());
ObsComponent = __decorate([
    core_1.Component({
        selector: 'obs',
        template: "<ul>\n                    <li *ngFor=\"let user of users\">\n                    <p>\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: {{user.name}}</p>\n                    <p>\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: {{user.age}}</p>\n                    </li>\n                </ul>",
        providers: [http_obs_service_1.HttpObsService]
    }),
    __metadata("design:paramtypes", [http_obs_service_1.HttpObsService])
], ObsComponent);
exports.ObsComponent = ObsComponent;
//# sourceMappingURL=obs.component.js.map