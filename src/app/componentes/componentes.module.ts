import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PresentacionComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PresentacionComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent
  ]
})
export class ComponentesModule { }
