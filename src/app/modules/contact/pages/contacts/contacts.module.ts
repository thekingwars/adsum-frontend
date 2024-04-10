import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    NgbPaginationModule,
    NgbHighlight,
  ],
})
export class ContactsModule {}
