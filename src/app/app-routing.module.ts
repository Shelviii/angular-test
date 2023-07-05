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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/welcome', component: WelcomeComponent },
  { path: 'admin/add', component: AddComponent },
  { path: 'admin/edit/:id', component: AddComponent },
  { path: 'admin/category', component: AdminCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
