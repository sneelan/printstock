import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ProductlistComponent } from './admin/pages/productlist/productlist.component';
import { OrderlistComponent } from './admin/pages/orderlist/orderlist.component';
import { CustomerlistComponent } from './admin/pages/customerlist/customerlist.component';
import { CategoriesComponent } from './admin/pages/categories/categories.component';
import { AttributesComponent } from './admin/pages/attributes/attributes.component';
import { AccessDeniedComponent } from './admin/pages/access-denied/access-denied.component';
import { AgentlistComponent } from './admin/pages/agentlist/agentlist.component';
import { LoginTestComponent } from './admin/pages/login-test/login-test.component';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', component: LoginTestComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/orders', component: OrderlistComponent },
  { path: 'admin/products', component: ProductlistComponent },
  { path: 'admin/customers', component: CustomerlistComponent },
  { path: 'admin/agents', component: AgentlistComponent },
  { path: 'admin/categories', component: CategoriesComponent },
  { path: 'admin/attributes', component: AttributesComponent },
  { path: 'admin/access-denied', component: AccessDeniedComponent },
  { path: '**', redirectTo: 'login'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
