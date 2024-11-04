import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Address', loadChildren: () => import('./Address/Address.module').then(m => m.AddressModule) },
    
        { path: 'Category', loadChildren: () => import('./Category/Category.module').then(m => m.CategoryModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'CustomerSupportTicket', loadChildren: () => import('./CustomerSupportTicket/CustomerSupportTicket.module').then(m => m.CustomerSupportTicketModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'Order', loadChildren: () => import('./Order/Order.module').then(m => m.OrderModule) },
    
        { path: 'OrderItem', loadChildren: () => import('./OrderItem/OrderItem.module').then(m => m.OrderItemModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Product', loadChildren: () => import('./Product/Product.module').then(m => m.ProductModule) },
    
        { path: 'ProductCategory', loadChildren: () => import('./ProductCategory/ProductCategory.module').then(m => m.ProductCategoryModule) },
    
        { path: 'ProductSupplier', loadChildren: () => import('./ProductSupplier/ProductSupplier.module').then(m => m.ProductSupplierModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }