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
var test_service_1 = require("./test.service");
var TestComponent = (function () {
    function TestComponent(_testServ) {
        this._testServ = _testServ;
        this.users = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._testServ.getUser().subscribe(function (data) { return _this.users = data; });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: "test-mest",
        template: "<div>\n               <ol>\n               <li *ngFor =\"let user of  users\">\n               <p>Name of UN {{user?.userId}}</p>\n               <p>Age of UA {{user?.id}}</p>\n               </li>\n               </ol>\n              </div>",
        providers: [test_service_1.TestService]
    }),
    __metadata("design:paramtypes", [test_service_1.TestService])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map