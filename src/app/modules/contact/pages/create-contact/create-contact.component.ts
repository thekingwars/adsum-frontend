import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, map, tap } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.scss',
})
export class CreateContactComponent {
  form: FormGroup = this.fb.group({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
        ),
      ])
    ),
    phone: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9,+]*$'),
      ])
    ),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(120),
    ]),
    category: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
  });

  changeMessageLetters$ = this.form.get('message')?.valueChanges.pipe(
    debounceTime(150),
    map((value: string) => value.length)
  );

  getErrorMessage(field: string) {
    let error: AbstractControl<any, any> = this.form.get(field)!;
    let message;

    if (error?.errors?.['required']) {
      message = 'El campo es requerido';
    }
    if (error.errors?.['minlength'] || error.errors?.['maxlength']) {
      message = 'Debe colocar un mínimo de 12 caracteres y un máximo de 120';
    }

    if (error.hasError('pattern') && field === 'email') {
      message = 'El email es invalido';
    }

    if (error.hasError('pattern') && field === 'phone') {
      message = 'El teléfono es invalido';
    }

    return message;
  }

  isValidField(field: string) {
    const error = this.form.get(field);

    return error?.dirty || error?.touched;
  }

  onSubmit() {
    this.contactService
      .addContact(this.form.value)
      .pipe(
        tap(() => {
          alert('Mensaje enviado con éxito');

          this.form.reset();

          this.router.navigate(['/adsum/contacts']);
        })
      )
      .subscribe();
  }

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {}
}
