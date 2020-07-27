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
  searchedJobs: Jobs[] = [];
  public jobName = '';
  message = '';
  columns: string[] = ['partId', 'jobName', 'userId', 'qty'];
  index = ['partId', 'jobName', 'userId', 'qty'];

  constructor(public service: JobService, private toastr: ToastrService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAllorders();
  }

  getAllorders() {
    this.service.getAllorders().subscribe(
      (response: JobResponse_OrderedJob) => {
        this.jobs = response?.Items;
        this.searchedJobs = this.jobs;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  searchJob() {
    let valid = true;
    //console.log(this.jobName);
    if (this.jobName == '') {
      this.toastr.error('JobName cannot be empty');
      valid = false;
    }

    if (valid) {
      this.searchedJobs = [];
      this.jobs.forEach((job) => {
        if (this.jobName == job.jobName) {
          this.searchedJobs.push(job);
        }
      });
      if (this.searchedJobs.length == 0) {
        this.toastr.error('Job does not exists in database', 'No job Found.');
      } else {
        this.toastr.success('', 'Job Found');
      }
    }
  }

  clearSearch() {
    this.jobName = '';
    this.getAllorders();
  }
}
