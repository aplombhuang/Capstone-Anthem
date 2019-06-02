import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './components.module';

import { routesPath } from '../routes/path.routes';

import 'hammerjs';
import { HomeComponent } from '../pages/home/home.component';
import { EcommerceComponent } from '../pages/ecommerce/ecommerce.component';
import { ProductsComponent } from '../pages/products/products.component';
import { OrderReviewPageComponent } from '../pages/order-review-page/order-review-page.component';
import { ButtonsPageComponent } from '../pages/buttons-page/buttons-page.component';
import { AppBarPageComponent } from '../pages/app-bar-page/app-bar-page.component';
import { SimpleUiPageComponent } from '../pages/simple-ui-page/simple-ui-page.component';
import { CardPageComponent } from '../pages/card-page/card-page.component';
import { SliderPageComponent } from '../pages/slider-page/slider-page.component';
import { DatePickerPageComponent } from '../pages/date-picker-page/date-picker-page.component';
import { TimePickerPageComponent } from '../pages/time-picker-page/time-picker-page.component';
import { DialogPageComponent } from '../pages/dialog-page/dialog-page.component';
import { TabPageComponent } from '../pages/tab-page/tab-page.component';
import { ProgressPageComponent } from '../pages/progress-page/progress-page.component';
import { ListPageComponent } from '../pages/list-page/list-page.component';
import { MenuPageComponent } from '../pages/menu-page/menu-page.component';
import { GridListPageComponent } from '../pages/grid-list-page/grid-list-page.component';
import { GridPageComponent } from '../pages/grid-page/grid-page.component';
import { BasicFormPageComponent } from '../pages/basic-form-page/basic-form-page.component';
import { SwitchPageComponent } from '../pages/switch-page/switch-page.component';
import { FormLayoutPageComponent } from '../pages/form-layout-page/form-layout-page.component';
import { ChartBarPageComponent } from '../pages/chart-bar-page/chart-bar-page.component';
import { ChartLinePageComponent } from '../pages/chart-line-page/chart-line-page.component';
import { ChartAreaPageComponent } from '../pages/chart-area-page/chart-area-page.component';
import { ChartOtherPageComponent } from '../pages/chart-other-page/chart-other-page.component';
import { TableBootstrapPageComponent } from '../pages/table-bootstrap-page/table-bootstrap-page.component';
import { TableMaterialPageComponent } from '../pages/table-material-page/table-material-page.component';
import { MapPageComponent } from '../pages/map-page/map-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ServicePageComponent } from '../pages/service-page/service-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { BlogPageComponent } from '../pages/blog-page/blog-page.component';
import { PricingTablePageComponent } from '../pages/pricing-table-page/pricing-table-page.component';
import { FaqPageComponent } from '../pages/faq-page/faq-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { ForgotPassPageComponent } from '../pages/forgot-pass-page/forgot-pass-page.component';
import { ConfirmMailPageComponent } from '../pages/confirm-mail-page/confirm-mail-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LayoutDefaultPageComponent } from '../pages/layout-default-page/layout-default-page.component';
import { LayoutBannerPageComponent } from '../pages/layout-banner-page/layout-banner-page.component';

export const ROUTES: Routes = routesPath;

@NgModule({
  imports: [
    MaterialModule,
    ComponentsModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule,
    HomeComponent,
    EcommerceComponent,
    ProductsComponent,
    OrderReviewPageComponent,
    ButtonsPageComponent,
    AppBarPageComponent,
    SimpleUiPageComponent,
    CardPageComponent,
    SliderPageComponent,
    DatePickerPageComponent,
    TimePickerPageComponent,
    DialogPageComponent,
    TabPageComponent,
    ProgressPageComponent,
    ListPageComponent,
    MenuPageComponent,
    GridListPageComponent,
    GridPageComponent,
    BasicFormPageComponent,
    SwitchPageComponent,
    FormLayoutPageComponent,
    ChartBarPageComponent,
    ChartLinePageComponent,
    ChartAreaPageComponent,
    ChartOtherPageComponent,
    TableBootstrapPageComponent,
    TableMaterialPageComponent,
    MapPageComponent,
    AboutPageComponent,
    ServicePageComponent,
    ContactPageComponent,
    BlogPageComponent,
    PricingTablePageComponent,
    FaqPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPassPageComponent,
    ConfirmMailPageComponent,
    ErrorPageComponent,
    LayoutDefaultPageComponent,
    LayoutBannerPageComponent
  ],
  declarations: [HomeComponent, EcommerceComponent, ProductsComponent, OrderReviewPageComponent, ButtonsPageComponent, AppBarPageComponent, SimpleUiPageComponent, CardPageComponent, SliderPageComponent, DatePickerPageComponent, TimePickerPageComponent, DialogPageComponent, TabPageComponent, ProgressPageComponent, ListPageComponent, MenuPageComponent, GridListPageComponent, GridPageComponent, BasicFormPageComponent, SwitchPageComponent, FormLayoutPageComponent, ChartBarPageComponent, ChartLinePageComponent, ChartAreaPageComponent, ChartOtherPageComponent, TableBootstrapPageComponent, TableMaterialPageComponent, MapPageComponent, AboutPageComponent, ServicePageComponent, ContactPageComponent, BlogPageComponent, PricingTablePageComponent, FaqPageComponent, LoginPageComponent, RegisterPageComponent, ForgotPassPageComponent, ConfirmMailPageComponent, ErrorPageComponent, LayoutDefaultPageComponent, LayoutBannerPageComponent],

})
export class PagesModule { }
