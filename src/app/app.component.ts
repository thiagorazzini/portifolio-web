import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name!: string;
  email!: string;
  subject!: string;
  massage!: string;

  constructor(
    private contacService: ContactsService,
    private toastService: ToastrService
  ) {}

  sendMessage() {
    console.log(this.name);
    this.contacService
      .addContact({
        Name: this.name,
        Email: this.email,
        Subject: this.subject,
        Massage: this.massage,
      })
      .subscribe(() => {
        this.toastService.success('Mensagem enviada, Sucesso');
        this.name = '';
        this.email = '';
        this.subject = '';
        this.massage = '';
      });
  }
}
