import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CustomerSupportTicket-card.component.html',
  styleUrls: ['./CustomerSupportTicket-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CustomerSupportTicket-card]': 'true'
  }
})

export class CustomerSupportTicketCardComponent {


}