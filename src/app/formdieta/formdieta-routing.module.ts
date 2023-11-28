import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormdietaPage } from './formdieta.page';

const routes: Routes = [
  {
    path: '',
    component: FormdietaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormdietaPageRoutingModule {}
