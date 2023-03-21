import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '../models/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  apiUrl = 'https://localhost:7253/contacts';
  constructor(private http: HttpClient) {}

  addContact(contact: Contact) {
    return this.http.post(this.apiUrl, contact);
  }
}
