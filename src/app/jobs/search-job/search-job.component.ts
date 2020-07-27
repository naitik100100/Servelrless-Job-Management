import { Jobs, JobResponse, JobResponse_OrderedJob } from '@app/shared/jobs.model';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '@app/shared/job.service';
import { Component, OnInit } from '@angular/core';
import { Ordered_Jobs } from '@app/shared/jobs.model';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.scss'],
})
export class SearchJobComponent implements OnInit {
  jobs: Ordered_Jobs[] = [];
  public jobName = '';
  message = '';
  columns: string[] = ['partId', 'jobName', 'userId', 'qty'];
  index = ['partId', 'jobName', 'userId', 'qty'];

  constructor(public service: JobService, private toastr: ToastrService, private dialog: MatDialog) {}

  ngOnInit() {
    this.service.getAllorders().subscribe(
      (response: JobResponse_OrderedJob) => {
        this.jobs = response?.items;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  searchJob() {
    this.service.searchJob(this.jobName).subscribe(
      (response: JobResponse_OrderedJob) => {
        console.log(response);
        this.jobs = response?.items;
        if (this.jobs.length == 0) {
          this.toastr.error('Job does not exists in database', 'No job Found.');
        } else {
          this.toastr.success('', 'Job Found');
        }
      },
      (error) => {
        this.message = error;
        console.log(error);
      }
    );
  }

  clearSearch() {
    this.jobName = '';
    this.ngOnInit();
  }
}
