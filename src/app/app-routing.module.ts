import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SecureInnerPagesGuard } from './secure-inner-pages.guard';
import { ProfileComponent } from './profile/profile.component';
import { BrandComponent } from './admin/brand/brand.component';
import { PlatformComponent } from './admin/platform/platform.component';
import { AddComponent } from './admin/brand/add/add.component';
import { EditComponent } from './admin/brand/edit/edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'brand', component: BrandComponent, canActivate: [AuthGuard] },
  { path: 'brand/add', component: AddComponent, canActivate: [AuthGuard] },
  { path: 'brand/edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'platform', component: PlatformComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
