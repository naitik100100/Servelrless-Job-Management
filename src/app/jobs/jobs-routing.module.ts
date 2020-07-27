import { SearchJobComponent } from './search-job/search-job.component';
import { GetOnejobComponent } from './getone-job/getone-job.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AddJobsComponent } from './addjobs/addjobs.component';
import { DisplayJobsComponent } from './displayjobs/displayjobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsComponent } from './jobs.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    data: { title: 'Company X Jobs' },
  },
  { path: 'displayjobs', component: DisplayJobsComponent, data: { title: 'Display Jobs' } },
  { path: 'editjobs', component: EditDialogComponent, data: { title: 'Edit Jobs' } },
  { path: 'deletejobs', component: DeleteDialogComponent, data: { title: 'Delete Jobs' } },
  { path: 'addjobs', component: AddJobsComponent, data: { title: 'Add Jobs' } },
  { path: 'getOneJob', component: GetOnejobComponent, data: { title: 'Get Job' } },
  { path: 'searchjob', component: SearchJobComponent, data: { title: 'Search Job' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class JobsRoutingModule {}
