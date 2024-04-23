import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {bootstrapApplication} from '@angular/platform-browser';
import { ProductComponent } from './app/product/product.component';
import { routes } from './app/app-routing.module';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

//--component through route
// bootstrapApplication(ProductComponent,{
//   providers:[]
// });

//--component through route
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

//--app.routing file through
bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))]
});
