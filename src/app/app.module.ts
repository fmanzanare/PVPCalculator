import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { UpdatePurchaseComponent } from './update-purchase/update-purchase.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavBarComponent,
    SignUpComponent,
    SideMenuComponent,
    AddPurchaseComponent,
    AddProductComponent,
    AddDishComponent,
    AddRecipeComponent,
    UpdatePurchaseComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
