import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { ContactComponent } from './website/contact/contact.component';
import { PourquoiComponent } from './website/pourquoi/pourquoi.component';
import { ProduitComponent } from './website/produit/produit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pourquoi', component: PourquoiComponent },
  { path: 'produits', component: ProduitComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
