import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';

import { ComponentsModule } from './modules/components.module';
import { PagesModule } from './modules/pages.module';

import { NotificationService } from './services/notification.service';
import { MenuToggleService } from './services/menu-toggle.service';
import { BarChartService } from './services/bar-chart.service';
import { AreaChartService } from './services/area-chart.service';
import { ProductsService } from './services/products.service';
import { ProductsListService } from './services/products-list.service';
import { OurTeamService } from './services/our-team.service';
import { OurServicesService } from './services/our-services.service';
import { BlogService } from './services/blog.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdNativeDateModule,

    ComponentsModule,
    PagesModule
  ],
  providers: [NotificationService, MenuToggleService, BarChartService,
    AreaChartService, ProductsService, ProductsListService, OurTeamService, OurServicesService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
