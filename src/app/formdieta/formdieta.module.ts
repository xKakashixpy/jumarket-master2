import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormdietaPageRoutingModule } from './formdieta-routing.module';

import { FormdietaPage } from './formdieta.page';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormdietaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FormdietaPage]
})
export class FormdietaPageModule {}
