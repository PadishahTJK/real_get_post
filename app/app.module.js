"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
//Importiturm sam  AppComponent
var app_component_1 = require("./app.component");
var child_component_1 = require("./child.component");
var interaction_between_component_1 = require("./interaction.between.component");
//HTTP request
var http_1 = require("@angular/http");
var http_component_1 = require("./http.component");
var obs_component_1 = require("./rx/obs.component");
var test_component_1 = require("./test/test.component");
var oshibka_component_1 = require("./errorH/oshibka.component");
var complex_component_1 = require("./complex.request/complex.component");
var post_component_1 = require("./post/post.component");
var sending_param_component_1 = require("./sendingparameters/sending.param.component");
var pos_component_1 = require("./pos/pos.component");
var real_component_1 = require("./realUrl/real.component");
var haqiqat_component_1 = require("./haqiqat/haqiqat.component");
var gg_component_1 = require("./get/gg.component");
var observ_component_1 = require("./observ/observ.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, child_component_1.ChildComponent,
            interaction_between_component_1.InteractionBetweenComponent,
            http_component_1.HttpComponent,
            obs_component_1.ObsComponent,
            test_component_1.TestComponent,
            oshibka_component_1.OshibkaComponent,
            complex_component_1.ComplexComponent,
            post_component_1.PostComponent,
            sending_param_component_1.SendingParamComponent,
            pos_component_1.PosComponent,
            real_component_1.RealComponent,
            haqiqat_component_1.HaqiqatComponent,
            gg_component_1.GgComponent,
            observ_component_1.ObservComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map