import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportTicketHomeComponent } from './home/CustomerSupportTicket-home.component';
import { CustomerSupportTicketNewComponent } from './new/CustomerSupportTicket-new.component';
import { CustomerSupportTicketDetailComponent } from './detail/CustomerSupportTicket-detail.component';

const routes: Routes = [
  {path: '', component: CustomerSupportTicketHomeComponent},
  { path: 'new', component: CustomerSupportTicketNewComponent },
  { path: ':id', component: CustomerSupportTicketDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CustomerSupportTicket-detail-permissions'
      }
    }
  }
];

export const CUSTOMERSUPPORTTICKET_MODULE_DECLARATIONS = [
    CustomerSupportTicketHomeComponent,
    CustomerSupportTicketNewComponent,
    CustomerSupportTicketDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSupportTicketRoutingModule { }