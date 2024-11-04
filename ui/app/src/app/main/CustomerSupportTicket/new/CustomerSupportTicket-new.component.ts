import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CustomerSupportTicket-new',
  templateUrl: './CustomerSupportTicket-new.component.html',
  styleUrls: ['./CustomerSupportTicket-new.component.scss']
})
export class CustomerSupportTicketNewComponent {
  @ViewChild("CustomerSupportTicketForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}