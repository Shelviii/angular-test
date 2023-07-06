import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AddComponent } from './admin/add/add.component';
import { AdminCategoryComponent } from './admin/category/category.component';
import { AdminContactComponent } from './admin/contact/contact.component';
import { AdminContactPreviewComponent } from './admin/contact/preview/preview.component';
import { ProductPreviewComponent } from './product/preview/preview.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'product/preview/:id', component: ProductPreviewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/welcome', component: WelcomeComponent },
  { path: 'admin/add', component: AddComponent },
  { path: 'admin/edit/:id', component: AddComponent },
  { path: 'admin/category', component: AdminCategoryComponent },
  { path: 'admin/contact', component: AdminContactComponent },
  {
    path: 'admin/contact/preview/:id',
    component: AdminContactPreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
