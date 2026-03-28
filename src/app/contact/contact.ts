import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactInfo: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(7)]),
    message: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });

  onSubmit(): void {
    if (this.contactInfo.valid) {
      console.log(this.contactInfo.value); // handle your form data here
    }
  }

  onReset() {
    this.contactInfo.reset({
      name: '',
      email: '',
      message: '',
    });
  }
}
