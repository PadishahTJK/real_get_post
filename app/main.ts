// Platform  For the  Browser  with  the  Compilator 
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//App Module
import {AppModule}  from './app.module';

// Peremenuyu dayom znachenie  Kompiliruem  
const platform = platformBrowserDynamic();
//Zapuskaem  Module
platform.bootstrapModule(AppModule);

