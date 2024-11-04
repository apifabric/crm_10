import { MenuRootItem } from 'ontimize-web-ngx';

import { AddressCardComponent } from './Address-card/Address-card.component';

import { CategoryCardComponent } from './Category-card/Category-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { CustomerSupportTicketCardComponent } from './CustomerSupportTicket-card/CustomerSupportTicket-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { OrderCardComponent } from './Order-card/Order-card.component';

import { OrderItemCardComponent } from './OrderItem-card/OrderItem-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { ProductCardComponent } from './Product-card/Product-card.component';

import { ProductCategoryCardComponent } from './ProductCategory-card/ProductCategory-card.component';

import { ProductSupplierCardComponent } from './ProductSupplier-card/ProductSupplier-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Address', name: 'ADDRESS', icon: 'view_list', route: '/main/Address' }
    
        ,{ id: 'Category', name: 'CATEGORY', icon: 'view_list', route: '/main/Category' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'CustomerSupportTicket', name: 'CUSTOMERSUPPORTTICKET', icon: 'view_list', route: '/main/CustomerSupportTicket' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'Order', name: 'ORDER', icon: 'view_list', route: '/main/Order' }
    
        ,{ id: 'OrderItem', name: 'ORDERITEM', icon: 'view_list', route: '/main/OrderItem' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Product', name: 'PRODUCT', icon: 'view_list', route: '/main/Product' }
    
        ,{ id: 'ProductCategory', name: 'PRODUCTCATEGORY', icon: 'view_list', route: '/main/ProductCategory' }
    
        ,{ id: 'ProductSupplier', name: 'PRODUCTSUPPLIER', icon: 'view_list', route: '/main/ProductSupplier' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AddressCardComponent

    ,CategoryCardComponent

    ,CustomerCardComponent

    ,CustomerSupportTicketCardComponent

    ,EmployeeCardComponent

    ,OrderCardComponent

    ,OrderItemCardComponent

    ,PaymentCardComponent

    ,ProductCardComponent

    ,ProductCategoryCardComponent

    ,ProductSupplierCardComponent

    ,SupplierCardComponent

];