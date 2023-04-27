import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MainSettingsComponent } from './main-settings/main-settings.component';

const routes: Routes = [
  { path: '', component: MainSettingsComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  declarations: [MainSettingsComponent, EmptyRouteComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/settings' }],
})
export class AppRoutingModule {}
