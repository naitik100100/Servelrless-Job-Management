import { Router } from '@angular/router';
import { Jobs, JobResponse } from './../../shared/jobs.model';
import { NgForm } from '@angular/forms';
import { _employeeDetails } from './../../interfaces';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobService } from './../../shared/job.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  jobs: Jobs[] = [];
  jobName: string;
  partId: number;
  qty: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Jobs,
    public service: JobService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.jobName = data.jobName;
    this.partId = data.partId;
    this.qty = data.qty;
  }

  ngOnInit(): void {}

  confirm(form: NgForm) {
    this.dialogRef.close(form.value);
  }
}
