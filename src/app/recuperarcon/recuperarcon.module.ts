import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarconPageRoutingModule } from './recuperarcon-routing.module';

import { RecuperarconPage } from './recuperarcon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperarconPageRoutingModule
  ],
  declarations: [RecuperarconPage]
})
export class RecuperarconPageModule {}
