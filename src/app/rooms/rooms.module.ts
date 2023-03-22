import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { CustompipesModule } from '../custompipes/custompipes.module';
import { BannerComponent } from './banner/banner.component';
import { RouteConfigToken } from '../common-services/routeConfig.service';
import { RouteConfig } from '../common-services/routeConfig';
import { ConfigService } from '../common-services/config.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsAddComponent,
    BannerComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    CustompipesModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { title: 'boohoo' },
    }
  ]
})
export class RoomsModule { }
