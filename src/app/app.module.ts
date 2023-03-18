import { APP_CONFIG, APP_SERVICE_CONFIG } from './app-config/appconfig.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './rooms/header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookingComponent } from './rooms/booking/booking.component';
import { GetElemPipe } from './rooms/booking/GetElemPipe';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';

// https://angular.io/guide/ngmodules
// I can have any number of modules in my application, but there always has to be only one root module
// the ngmodule decorator modifies the behavior of the class - it (injects?) the information about all the components, modules, etc in our application, which we want to use
// basically, we configure this module as an root module (not saying it's a root module, but we set it up in such a way, that it can be used as a root module)
// this configuration is passed to the compiler
// then we can bootstrap this module in main.ts

// NOTE: there are two "bootstraps" we're talking about here:
// - the module bootstrap in main.ts - defining the root module
// - the component bootstrap in @NgModule - defining which component will be the root component

function initFactory(initService: InitService){
  return () => initService.init();
}

@NgModule({ // annotation marking the class (AppModule) as module
  declarations: [ // any components, directives and pipes must be registered here
    AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent, AppNavComponent, NotfoundComponent, BookingComponent,
    GetElemPipe,
    RoomsAddComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [ // any module we intend to use, must be placed here (both external and those created by us)
    BrowserModule, // angular platform provided module, part of the browser library
    AppRoutingModule, BrowserAnimationsModule, // approuting module is created by us
    HttpClientModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true // there are more here
    }
  ],
  bootstrap: [AppComponent] // this defines, which component will be loaded first (the root component)
})
export class AppModule { } // the root module of the application
