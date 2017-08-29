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
var InteractionBetweenComponent = (function () {
    function InteractionBetweenComponent() {
    }
    Object.defineProperty(InteractionBetweenComponent.prototype, "userAge", {
        get: function () {
            return this._userAge;
        },
        //Привязка к сеттеру
        /*
        Это может быть необходимо, когда в дочернем компоненте
         надо осуществлять проверку или даже модификацию значения,
        получаемого от главного компонента.
      Например, пусть в главном компоненте устанавливается возраст пользователя:
        */
        set: function (age) {
            if (age < 0) {
                this._userAge = 0;
            }
            else if (age > 100) {
                this._userAge = age;
            }
            else {
                this._userAge = age;
            }
        },
        enumerable: true,
        configurable: true
    });
    return InteractionBetweenComponent;
}()); // Setter 
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InteractionBetweenComponent.prototype, "userName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], InteractionBetweenComponent.prototype, "userAge", null);
InteractionBetweenComponent = __decorate([
    core_1.Component({
        selector: 'inter',
        template: "\n             <p> User name: {{userName}}</p>\n             <p>User age: {{userAge}}</p>    \n            \n             "
    })
], InteractionBetweenComponent);
exports.InteractionBetweenComponent = InteractionBetweenComponent;
//# sourceMappingURL=interaction.between.component.js.map