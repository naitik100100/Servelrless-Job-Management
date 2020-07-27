import { JobService } from './../../shared/job.service';
import { Jobs } from './../../shared/jobs.model';
import { _employeeDetails } from './../../interfaces';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  public jobname: string;
  public partid: number;
  public qty: number;

  formData: Jobs;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Jobs,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    public service: JobService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.formData);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.editJob(form.value).subscribe((res) => {
      console.log(res);
      this.toastr.success('Record Updated Successfully', 'Job Info Updated');
    });
    this.dialogRef.close();
  }
}
