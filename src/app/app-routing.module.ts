import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '',   redirectTo: 'login', pathMatch: 'full' },
	{ path:'sign-up', component:SignUpComponent },
	{ path:'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
