import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { TheatreComponent } from './theatre/theatre.component';
import { ShowComponent } from './show/show.component';
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'reset', component:PasswordResetComponent},
  {path: 'theatre/:id', component:TheatreComponent},
  {path: 'show/:id', component:ShowComponent},
  {path: 'seat/:id', component:SeatComponent},
  {path: 'payment/:id/:seat_ids', component:PaymentComponent},
  {path:'',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
