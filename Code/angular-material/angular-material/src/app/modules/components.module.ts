import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { CdkTableModule } from '@angular/cdk';
import { RouterModule } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


import 'hammerjs';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TinyBarChartComponent } from '../charts/tiny-bar-chart/tiny-bar-chart.component';
import { TinyAreaChartComponent } from '../charts/tiny-area-chart/tiny-area-chart.component';
import { TinyLineChartComponent } from '../charts/tiny-line-chart/tiny-line-chart.component';
import { IconBoxComponent } from '../components/icon-box/icon-box.component';
import { TotalEarnsComponent } from '../components/total-earns/total-earns.component';
import { AreaChartComponent } from '../charts/area-chart/area-chart.component';
import { TotalSalesComponent } from '../components/total-sales/total-sales.component';
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';
import { UserTableComponent } from '../components/user-table/user-table.component';
import { IconBoxAlterComponent } from '../components/icon-box-alter/icon-box-alter.component';
import { ProductsTableComponent } from '../components/products-table/products-table.component';
import { IconMenuComponent } from '../components/icon-menu/icon-menu.component';
import { ProductsGridComponent } from '../components/products-grid/products-grid.component';
import { OrderReviewComponent } from '../components/order-review/order-review.component';
import { ButtonsComponent } from '../components/ui-elements/buttons/buttons.component';
import { AppBarsComponent } from '../components/ui-elements/app-bars/app-bars.component';
import { SimpleUisComponent } from '../components/ui-elements/simple-uis/simple-uis.component';
import { CardsComponent } from '../components/ui-elements/cards/cards.component';
import { SlidersComponent } from '../components/ui-elements/sliders/sliders.component';
import { DatePickersComponent } from '../components/ui-elements/date-pickers/date-pickers.component';
import { TimePickersComponent } from '../components/ui-elements/time-pickers/time-pickers.component';
import { DialogsComponent } from '../components/ui-elements/dialogs/dialogs.component';
import { SimpleDialog } from '../components/ui-elements/dialogs/dialogs.component';
import { DialogWithFooter } from '../components/ui-elements/dialogs/dialogs.component';
import { DialogWithContextualHeading } from '../components/ui-elements/dialogs/dialogs.component';;
import { TabsComponent } from '../components/ui-elements/tabs/tabs.component';
import { ProgressComponent } from '../components/ui-elements/progress/progress.component';
import { ListsComponent } from '../components/ui-elements/lists/lists.component';
import { MenusComponent } from '../components/ui-elements/menus/menus.component';
import { GridListComponent } from '../components/ui-elements/grid-list/grid-list.component';
import { GridsComponent } from '../components/ui-elements/grids/grids.component';
import { BasicFormsComponent } from '../components/forms/basic-forms/basic-forms.component';
import { SwitchesComponent } from '../components/forms/switches/switches.component';
import { FormLayoutsComponent } from '../components/forms/form-layouts/form-layouts.component';
import { AutoCompleteComponent } from '../components/forms/basic-forms/auto-complete/auto-complete.component';
import { AboutUsComponent } from '../components/pages/about-us/about-us.component';
import { ServicesComponent } from '../components/pages/services/services.component';
import { ContactUsComponent } from '../components/pages/contact-us/contact-us.component';
import { BlogComponent } from '../components/pages/blog/blog.component';
import { PricingTableComponent } from '../components/pages/pricing-table/pricing-table.component';
import { FaqComponent } from '../components/pages/faq/faq.component';
import { LoginComponent } from '../components/other-pages/login/login.component';
import { RegisterComponent } from '../components/other-pages/register/register.component';
import { ForgotPasswordComponent } from '../components/other-pages/forgot-password/forgot-password.component';
import { ConfirmMailComponent } from '../components/other-pages/confirm-mail/confirm-mail.component';
import { Error404Component } from '../components/other-pages/error-404/error-404.component';
import { LayoutDefaultComponent } from '../components/page-layouts/layout-default/layout-default.component';
import { LayoutBannerComponent } from '../components/page-layouts/layout-banner/layout-banner.component';
import { BootstrapTablesComponent } from '../components/tables/bootstrap-tables/bootstrap-tables.component';
import { MaterialTablesComponent } from '../components/tables/material-tables/material-tables.component';
import { TableWithSortingComponent } from '../components/tables/table-with-sorting/table-with-sorting.component';
import { TableWithFilteringComponent } from '../components/tables/table-with-filtering/table-with-filtering.component';
import { SortHeaderComponent } from '../components/ui-elements/sort-header/sort-header.component';
import { SnackbarComponent } from '../components/ui-elements/snackbar/snackbar.component';
import { MapComponent } from '../components/map/map.component';
import { HorizontalBarChartComponent } from '../charts/horizontal-bar-chart/horizontal-bar-chart.component';
import { StackedBarChartComponent } from '../charts/stacked-bar-chart/stacked-bar-chart.component';
import { HorizontalStackedBarChartComponent } from '../charts/horizontal-stacked-bar-chart/horizontal-stacked-bar-chart.component';
import { LineChartComponent } from '../charts/line-chart/line-chart.component';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';
import { PieGridChartComponent } from '../charts/pie-grid-chart/pie-grid-chart.component';
import { GaugeChartComponent } from '../charts/gauge-chart/gauge-chart.component';

@NgModule({
  imports: [
    MaterialModule,
    NgxChartsModule,
    CdkTableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDa287-Veymu6a74ZxmkZkmRKM50zvpqqM'
    })
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotificationsComponent,
    SidebarComponent,
    TinyBarChartComponent,
    TinyAreaChartComponent,
    TinyLineChartComponent,
    IconBoxComponent,
    TotalEarnsComponent,
    AreaChartComponent,
    TotalSalesComponent,
    BarChartComponent,
    UserTableComponent,
    IconBoxAlterComponent,
    ProductsTableComponent,
    IconMenuComponent,
    ProductsGridComponent,
    OrderReviewComponent,
    ButtonsComponent,
    AppBarsComponent,
    SimpleUisComponent,
    CardsComponent,
    SlidersComponent,
    DatePickersComponent,
    TimePickersComponent,
    DialogsComponent,
    TabsComponent,
    ProgressComponent,
    ListsComponent,
    MenusComponent,
    GridListComponent,
    GridsComponent,
    BasicFormsComponent,
    SwitchesComponent,
    FormLayoutsComponent,
    AutoCompleteComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    BlogComponent,
    PricingTableComponent,
    FaqComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ConfirmMailComponent,
    Error404Component,
    LayoutDefaultComponent,
    LayoutBannerComponent,
    SimpleDialog,
    DialogWithFooter,
    DialogWithContextualHeading,
    BootstrapTablesComponent,
    MaterialTablesComponent,
    TableWithSortingComponent,
    TableWithFilteringComponent,
    SortHeaderComponent,
    SnackbarComponent,
    MapComponent,
    HorizontalBarChartComponent,
    StackedBarChartComponent,
    HorizontalStackedBarChartComponent,
    LineChartComponent,
    PieChartComponent,
    PieGridChartComponent,
    GaugeChartComponent
  ],
  declarations: [HeaderComponent, FooterComponent, NotificationsComponent, SidebarComponent, TinyBarChartComponent, TinyAreaChartComponent, TinyLineChartComponent, IconBoxComponent, TotalEarnsComponent, AreaChartComponent, TotalSalesComponent, BarChartComponent, UserTableComponent, IconBoxAlterComponent, ProductsTableComponent, IconMenuComponent, ProductsGridComponent, OrderReviewComponent, ButtonsComponent, AppBarsComponent, SimpleUisComponent, CardsComponent, SlidersComponent, DatePickersComponent, TimePickersComponent, DialogsComponent, TabsComponent, ProgressComponent, ListsComponent, MenusComponent, GridListComponent, GridsComponent, BasicFormsComponent, SwitchesComponent, FormLayoutsComponent, AutoCompleteComponent, AboutUsComponent, ServicesComponent, ContactUsComponent, BlogComponent, PricingTableComponent, FaqComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, ConfirmMailComponent, Error404Component, LayoutDefaultComponent, LayoutBannerComponent, SimpleDialog, DialogWithFooter, DialogWithContextualHeading, BootstrapTablesComponent, MaterialTablesComponent, TableWithSortingComponent, TableWithFilteringComponent, SortHeaderComponent, SnackbarComponent, MapComponent, HorizontalBarChartComponent, StackedBarChartComponent, HorizontalStackedBarChartComponent, LineChartComponent, PieChartComponent, PieGridChartComponent, GaugeChartComponent],
  entryComponents: [ SimpleDialog, DialogWithFooter, DialogWithContextualHeading]

})
export class ComponentsModule { }
