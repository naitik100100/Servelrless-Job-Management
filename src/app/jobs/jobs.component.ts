import { Jobs, JobResponse, Ordered_Jobs, JobResponse_OrderedJob } from './../shared/jobs.model';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '@app/shared/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
