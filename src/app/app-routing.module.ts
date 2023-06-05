import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{ path: '',   redirectTo: 'login', pathMatch: 'full' },
	{ path:'sign-up', component:SignUpComponent },
	{ path:'login', component:LoginComponent },
	{
		path:'side-menu',
		component:SideMenuComponent,
		children: [
			{
				path:'dashboard',
				component:DashboardComponent,
				outlet:'post'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
