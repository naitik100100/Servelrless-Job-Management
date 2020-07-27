import { Router } from '@angular/router';
import { JobService } from './../../shared/job.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.scss'],
})
export class AddJobsComponent implements OnInit {
  constructor(public service: JobService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
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
    this.service.postJobs(form.value).subscribe(
      (res) => {
        this.resetFrom(form);
        this.router.navigateByUrl('/jobs/displayjobs');
        this.toastr.success('New Record Added Successfully', 'Job Info Added');
      },
      (error) => {
        console.log(error.message);
        this.toastr.error('Part id does not exist in Parts table', 'This Job can not be Added');
      }
    );
  }
}
