import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { JobService } from '@app/shared/job.service';
import { Jobs, JobResponse } from '@app/shared/jobs.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-getone-job',
  templateUrl: './getone-job.component.html',
  styleUrls: ['./getone-job.component.scss'],
})
export class GetOnejobComponent implements OnInit {
  jobs: Jobs[] = [];
  columns: string[] = ['jobName', 'partId', 'qty'];
  index = ['jobName', 'partId', 'qty'];

  constructor(public service: JobService, private toastr: ToastrService, private router: Router) {}

  ngOnInit() {
    this.resetFrom();
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
    this.service.getOneJob(form.value).subscribe(
      (response: JobResponse) => {
        this.jobs = response?.items;
        console.log(response);
        this.resetFrom(form);
        if (this.jobs.length == 0) {
          this.toastr.error('Job does not exists in database', 'No job Found.');
        } else {
          this.toastr.success('', 'Job Found');
        }
      },
      (error) => {
        console.log(error.message);
        this.toastr.error('Part id does not exist in Parts table', 'This Job can not be Added');
      }
    );
  }
}
