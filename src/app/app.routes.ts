import { Routes } from '@angular/router';
import { Home } from './pages/auth/home/home';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { ResetPassword } from './pages/auth/reset-password/reset-password';
import { Browse } from './pages/browse/browse';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'browse', component: Browse },
  { path: '**', redirectTo: '' },
];
