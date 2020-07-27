import { PartsService } from './../../shared/parts.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { JobService } from '@app/shared/job.service';
import { Jobs, JobResponse } from '@app/shared/jobs.model';
import { NgForm } from '@angular/forms';
import { Parts } from '@app/shared/parts.model';

@Component({
  selector: 'app-getone-job',
  templateUrl: './getone-job.component.html',
  styleUrls: ['./getone-job.component.scss'],
})
export class GetOnejobComponent implements OnInit {
  jobs: Jobs[] = [];
  parts: Parts[] = [];
  searchedJobs: Jobs[] = [];
  columns: string[] = ['jobName', 'partId', 'qty'];
  index = ['jobName', 'partId', 'qty'];

  constructor(
    public service: JobService,
    public part_service: PartsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.resetFrom();
    this.getAllJobs();
    this.getAllParts();
  }

  getAllJobs() {
    this.service.getJobsList().subscribe(
      (response: JobResponse) => {
        this.jobs = response?.Items;
        //this.searchedJobs = this.jobs;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  getAllParts() {
    this.part_service.getPartsList().subscribe(
      (response) => {
        this.parts = response['Items'];
        //this.searchedJobs = this.jobs;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  resetFrom(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      jobName: '',
      partId: null,
      qty: null,
    };
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.searchedJobs = [];

    this.parts.filter((part) => {
      if (form.value.partId == part.partId) {
        this.jobs.forEach((job) => {
          if (form.value.jobName == job.jobName && job.partId == part.partId) {
            console.log(job);
            this.searchedJobs.push(job);
          }
        });
      }
    });

    if (this.searchedJobs.length == 0) {
      this.toastr.error('Job does not exists in database', 'No job Found.');
    } else {
      this.toastr.success('', 'Job Found');
    }
  }
}
