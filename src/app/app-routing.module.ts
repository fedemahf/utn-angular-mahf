import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductComponent } from './Pages/product/product.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "register", component: RegisterComponent},
  { path: "login", component: LoginComponent},
  { path: "product/:id", component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
