import { JobsComponent } from './jobs/jobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: JobsComponent,
    data: { title: 'home' },
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then((m) => m.JobsModule),
    // canActivate: [AuthenticationGuard]
  },
  //Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
