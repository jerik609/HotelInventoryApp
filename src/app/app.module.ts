import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// https://angular.io/guide/ngmodules
// I can have any number of modules in my application, but there always has to be only one root module
// the ngmodule decorator modifies the behavior of the class - it (injects?) the information about all the components, modules, etc in our application, which we want to use
// basically, we configure this module as an root module (not saying it's a root module, but we set it up in such a way, that it can be used as a root module)
// this configuration is passed to the compiler
// then we can bootstrap this module in main.ts

// NOTE: there are two "bootstraps" we're talking about here:
// - the module bootstrap in main.ts - defining the root module
// - the component bootstrap in @NgModule - defining which component will be the root component

@NgModule({ // annotation marking the class (AppModule) as module
  declarations: [ // any components, directives and pipes must be registered here
    AppComponent, RoomsComponent
  ],
  imports: [ // any module we intend to use, must be placed here (both external and those created by us)
    BrowserModule, // angular platform provided module, part of the browser library
    AppRoutingModule, BrowserAnimationsModule // approuting module is created by us
  ],
  providers: [],
  bootstrap: [AppComponent] // this defines, which component will be loaded first (the root component)
})
export class AppModule { } // the root module of the application
