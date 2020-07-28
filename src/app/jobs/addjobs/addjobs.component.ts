import { Router } from '@angular/router';
import { JobService } from './../../shared/job.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { PartsService } from '@app/shared/parts.service';
import { Parts } from '@app/shared/parts.model';
import { Jobs } from '@app/shared/jobs.model';

@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.scss'],
})
export class AddJobsComponent implements OnInit {
  parts: Parts[] = [];
  jobs: Jobs[] = [];
  constructor(
    public service: JobService,
    public part_service: PartsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetFrom();
    this.getAllParts();
    this.getAllJobs();
  }

  getAllParts() {
    this.part_service.getPartsList().subscribe(
      (response) => {
        this.parts = response['Items'];
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  getAllJobs() {
    this.service.getJobsList().subscribe(
      (data) => {
        this.jobs = data['Items'];
      },
      (error) => {
        console.log(error);
      }
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
    let valid = true;
    if (form.value.partId < 0) {
      this.toastr.error('PartId cannot be negative');
      valid = false;
    }
    if (form.value.qty < 0) {
      this.toastr.error('Quantity cannot be negative');
      valid = false;
    }

    let jobExists = this.jobs.filter(
      (job) => form.value.partId == job.partId && form.value.jobName.toLowerCase() == job.jobName.toLowerCase()
    );
    if (jobExists.length > 0) {
      this.toastr.error('Job already exists');
      valid = false;
    }

    let flag = false;
    if (valid) {
      this.parts.filter((part) => {
        if (form.value.partId == part.partId) {
          flag = true;
          this.service.postJobs(form.value).subscribe(
            (res) => {
              this.resetFrom(form);
              this.router.navigateByUrl('/jobs/displayjobs');
            },
            (error) => {
              console.log(error.message);
            }
          );
        }
      });
      if (flag) {
        this.toastr.success('New Record Added Successfully', 'Job Info Added');
      } else {
        this.toastr.error('Part id does not exist in Parts table', 'This Job can not be Added');
      }
    }
  }
}
