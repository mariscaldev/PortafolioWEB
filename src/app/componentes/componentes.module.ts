import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LogoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LogoComponent,
    FooterComponent
  ]
})
export class ComponentesModule { }
