import { Router } from '@angular/router';
import { Jobs, JobResponse, JobResponse_OrderedJob } from './../../shared/jobs.model';
import { NgForm } from '@angular/forms';
import { _employeeDetails } from './../../interfaces';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobService } from './../../shared/job.service';
import { ToastrService } from 'ngx-toastr';
import { PartsService } from '@app/shared/parts.service';
import { Parts } from '@app/shared/parts.model';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  serchedParts: Jobs[] = [];
  jobs: Jobs[] = [];
  jobName: string;
  partId: number;
  qty: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Jobs,
    public service: JobService,
    public part_service: PartsService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.jobName = data.jobName;
    this.partId = data.partId;
    this.qty = data.qty;
  }

  ngOnInit(): void {
    this.getAllorders();
  }
  getAllorders() {
    this.service.getAllorders().subscribe(
      (response: JobResponse_OrderedJob) => {
        this.jobs = response?.Items;
        this.serchedParts = this.jobs;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }
  confirm(form: NgForm) {
    console.log(form.value);
    let valid = true;
    this.serchedParts.filter((part) => {
      if (form.value.partId == part.partId) {
        valid = false;
      }
    });
    if (valid) {
      this.dialogRef.close(form.value);
    } else {
      this.toastr.error('Part id is foreign key in another table', 'This Job can not be deleted');
    }
  }
}
