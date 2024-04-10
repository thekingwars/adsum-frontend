import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Contact } from '../../../@core/models/contact';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly url = environment.api;

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http
      .get<{ data: Contact[] }>(`${this.url}/contact-support`)
      .pipe(map((contacts) => contacts.data));
  }

  addContact(contact: Contact) {
    return this.http.post(`${this.url}/contact-support`, {
      ...contact,
      category: contact.category.toUpperCase(),
    });
  }
}
