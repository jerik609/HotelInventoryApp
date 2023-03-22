import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { CustompipesModule } from '../custompipes/custompipes.module';
import { BannerComponent } from './banner/banner.component';
import { RouteConfigToken } from '../common-services/routeConfig.service';
import { RouteConfig } from '../common-services/routeConfig';
import { ConfigService } from '../common-services/config.service';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsAddComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    CustompipesModule
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { title: 'boohoo' },
    }
  ]
})
export class RoomsModule { }
