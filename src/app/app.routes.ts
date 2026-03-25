import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Connexion | Flight' },
  { path: 'register', component: RegisterComponent, title: 'Inscription | Flight' },
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Mot de passe oublié | Flight' },
  { path: 'reset-password', component: ResetPasswordComponent, title: 'Réinitialisation du mot de passe | Flight' },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard], title: 'Mon profil | Flight' },
  { path: '**', redirectTo: 'login' }
];
