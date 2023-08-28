import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss'],
})
export class PresentacionComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const typed = new Typed('.titulo', {
      strings: ['Analista Programador'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
    const typeded = new Typed('.nombre', {
      strings: ['Raúl Mariscal'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }
}
