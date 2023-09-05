import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: [''],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.contactForm.valid) {
      // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP (por ejemplo, usando HttpClient en Angular)
      console.log(this.contactForm.value);

      // Después de enviar el formulario, puedes limpiar los campos así:
      this.contactForm.reset();
    }
  }

  resetForm() {
    this.contactForm.reset();
  }
}