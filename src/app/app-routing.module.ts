import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BookListComponent } from './component/booklist/booklist.component';

const routes: Routes = [
  { path: '', redirectTo: 'booklist', pathMatch: 'full' },
  { path: 'booklist', component: BookListComponent},
  { path: 'book-details/:id', component: BookDetailsComponent},
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
