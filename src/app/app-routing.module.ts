import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { UpdatePurchaseComponent } from './update-purchase/update-purchase.component';

const routes: Routes = [
	{ path: '',   redirectTo: 'login', pathMatch: 'full' },
	{ path:'sign-up', component:SignUpComponent },
	{ path:'login', component:LoginComponent },
	{
		path:'side-menu',
		component:SideMenuComponent,
		children: [
			{ path:'', redirectTo:'dashboard', pathMatch:'full' },
			{ path:'dashboard', component:DashboardComponent},
			{ path:'add-product', component:AddProductComponent },
			{ path:'add-dish', component: AddDishComponent },
			{ path:'add-purchase', component:AddPurchaseComponent },
			{ path:'update-record', component: UpdatePurchaseComponent },
			{ path:'add-recipe', component:AddRecipeComponent }
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
