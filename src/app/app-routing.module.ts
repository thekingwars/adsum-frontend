import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adsum/contacts',
    pathMatch: 'full',
  },
  {
    path: 'adsum',
    loadChildren: () =>
      import('./modules/contact/pages/contact.module').then(
        (m) => m.ContactModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
