"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Platform  For the  Browser  with  the  Compilator 
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//App Module
var app_module_1 = require("./app.module");
// Peremenuyu dayom znachenie  Kompiliruem  
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
//Zapuskaem  Module
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map