import { SearchJobComponent } from './search-job/search-job.component';
import { GetOnejobComponent } from './getone-job/getone-job.component';
import { AddJobsComponent } from './addjobs/addjobs.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DisplayJobsComponent } from './displayjobs/displayjobs.component';

import { JobsComponent } from './jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, MaterialModule, JobsRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    JobsComponent,
    AddJobsComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    DisplayJobsComponent,
    GetOnejobComponent,
    SearchJobComponent,
  ],
})
export class JobsModule {}
