import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { PipesModule } from '../../../../shared/pipes/pipes.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    NgbPaginationModule,
    NgbHighlight,
    PipesModule,
  ],
})
export class ContactsModule {}
