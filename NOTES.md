# DI providers

there are 3 types of providers:
- class based - the one using `@Injectable`
- value providers
- factory

## Value providers - 1st usecase: application configuration
Let's have an environment configuration:
```
export const environment = {
  production: true,
  apiEndpoint: 'http://localhost:8080/api/v1/'
};
```
Now we can use it:
```
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() {
    console.log("The API endpoint!: " + environment.apiEndpoint);
  }

}
```
Wherever we want to use this configuration, we need to add the import statement. The import statement is kind of static and defined on multiple places, which is not ideal.

We can use value providers to fix that - to have just one shared configuration instance via DI.

We will create a value provider (service) `appconfig.service.ts`:
```
import { AppConfig } from './appconfig.interface';
import { InjectionToken } from "@angular/core";
import { environment } from "../../environments/environment";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>("app.config");

export const APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint
};
```
and the respective interface file `appconfig.interface.ts`:
```
export interface AppConfig {
  apiEndpoint: string;
}
```
As we can see - an injectable object is created, which is a container for an `AppConfig` type object named `app.config`. We also create an instance of the `AppConfig` object and set it's values based on the environment settings (this is how we connect the environment settings and the value provider).

But we still have not placed this `AppConfig` instance into the injectable object (which is a placeholder of an `AppConfig`). This is done in the `app.module.ts` file (but can be in any module, based on where we need to inject it (e.g. with respect to `@Host()` resolution modifier)). This is the definition of our **value provider**:
```
...
@NgModule({ // annotation marking the class (AppModule) as module
  declarations: [ // any components, directives and pipes must be registered here
    AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent
  ],
  imports: [ // any module we intend to use, must be placed here (both external and those created by us)
    BrowserModule, // angular platform provided module, part of the browser library
    AppRoutingModule, BrowserAnimationsModule // approuting module is created by us
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    }
  ],
  bootstrap: [AppComponent] // this defines, which component will be loaded first (the root component)
})
...
```
Now the instance is available for injection, albeit in a slightly different way than class based providers:
```
import { AppConfig } from './../../app-config/appconfig.interface';
import { APP_SERVICE_CONFIG } from './../../app-config/appconfig.service';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
...
  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig) {
    console.log("My API endpoint via value provider: " + appConfig.apiEndpoint);
  }
...
```
We tell the DI mechanism to inject the instance contained in the `APP_SERVICE_CONFIG` "wrapper" into our private property, which we can use.

The is a more cleaner way to handle configuration properties - it's more flexible as it is defined in a single place - the app config service (`appconfig.service.ts`).

## 2nd usecase: using LocalStorage in Angular

This works for all similar javascript constructs too.


