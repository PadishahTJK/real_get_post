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
var observ_service_1 = require("./observ.service");
var ObservComponent = (function () {
    function ObservComponent(_observService) {
        this._observService = _observService;
        this._d = [];
    }
    ObservComponent.prototype.Press = function () {
        var _this = this;
        this._observService.getData().subscribe(function (_d) { return _this._d = _d; });
    };
    return ObservComponent;
}()); //export class
ObservComponent = __decorate([
    core_1.Component({
        selector: "ob-s",
        template: "<div>\n    <pre>\n             <ol>\n             <ul *ngFor =\"let info of _d\" >\n             <p>{{info.postId}}</p>\n             <p>{{info.id}}</p>\n             <p>{{info.name}}</p>\n             <p>{{info.email}}</p>\n             <p>{{info.body}}</p>\n             \n             </ul>\n             </ol>\n             <button (click) =\"Press()\"> Getting the valuea</button>\n    </pre>\n              </div>",
        providers: [observ_service_1.ObservService]
    }),
    __metadata("design:paramtypes", [observ_service_1.ObservService])
], ObservComponent);
exports.ObservComponent = ObservComponent;
//# sourceMappingURL=observ.component.js.map