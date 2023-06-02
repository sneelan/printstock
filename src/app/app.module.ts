import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './admin/components/agent/agent.component';
import { CustomerComponent } from './admin/components/customer/customer.component';
import { EnquiryComponent } from './admin/components/enquiry/enquiry.component';
import { Footer1Component } from './admin/components/footer1/footer1.component';
import { GridComponent } from './admin/components/grid/grid.component';
import { Header1Component } from './admin/components/header1/header1.component';
import { OrderComponent } from './admin/components/order/order.component';
import { ProductComponent } from './admin/components/product/product.component';
import { SectionboxComponent } from './admin/components/sectionbox/sectionbox.component';
import { SectioncolorboxComponent } from './admin/components/sectioncolorbox/sectioncolorbox.component';
import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { TitleComponent } from './admin/components/title/title.component';
import { UserformComponent } from './admin/components/userform/userform.component';
import { AccessDeniedComponent } from './admin/pages/access-denied/access-denied.component';
import { AgentlistComponent } from './admin/pages/agentlist/agentlist.component';
import { AttributesComponent } from './admin/pages/attributes/attributes.component';
import { CategoriesComponent } from './admin/pages/categories/categories.component';
import { CustomerlistComponent } from './admin/pages/customerlist/customerlist.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { LoginTestComponent } from './admin/pages/login-test/login-test.component';
import { OrderlistComponent } from './admin/pages/orderlist/orderlist.component';
import { ProductlistComponent } from './admin/pages/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AgentComponent,
    CustomerComponent,
    EnquiryComponent,
    Footer1Component,
    GridComponent,
    Header1Component,
    OrderComponent,
    ProductComponent,
    SectionboxComponent,
    SectioncolorboxComponent,
    SidebarComponent,
    TitleComponent,
    UserformComponent,
    AccessDeniedComponent,
    AgentlistComponent,
    AttributesComponent,
    CategoriesComponent,
    CustomerlistComponent,
    DashboardComponent,
    LoginTestComponent,
    OrderlistComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
