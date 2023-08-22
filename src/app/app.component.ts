import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Proyectos', url: 'proyectos', icon: 'code' },
    { title: 'Contacto', url: 'contacto', icon: 'people' },
  ];
  constructor() {}
}
