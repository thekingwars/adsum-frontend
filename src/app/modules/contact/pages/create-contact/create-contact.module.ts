import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateContactRoutingModule } from './create-contact-routing.module';
import { CreateContactComponent } from './create-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateContactComponent],
  imports: [CommonModule, CreateContactRoutingModule, ReactiveFormsModule],
})
export class CreateContactModule {}
