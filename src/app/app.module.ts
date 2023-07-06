import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AdminMenuComponent } from './admin/admin.component/menu/menu.component';
import { ListComponent } from './admin/admin.component/list/list.component';
import { CreateComponent } from './admin/admin.component/create/create.component';
import { AddComponent } from './admin/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminCategoryComponent } from './admin/category/category.component';
import { AdminContactComponent } from './admin/contact/contact.component';
import { AdminContactPreviewComponent } from './admin/contact/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    ContactComponent,
    CategoryComponent,
    AdminComponent,
    WelcomeComponent,
    AdminMenuComponent,
    ListComponent,
    CreateComponent,
    AddComponent,
    AdminCategoryComponent,
    AdminContactComponent,
    AdminContactPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
