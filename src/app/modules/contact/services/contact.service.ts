import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Contact } from '../../../@core/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly url = environment.api;

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get(`${this.url}/contacts`);
  }

  addContact(contact: Contact) {
    return this.http.post(`${this.url}/contacts`, contact);
  }
}
