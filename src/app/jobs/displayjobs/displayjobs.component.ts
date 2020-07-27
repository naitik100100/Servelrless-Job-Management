import { Jobs, JobResponse } from './../../shared/jobs.model';
import { JobService } from './../../shared/job.service';
import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { _employeeDetails } from './../../interfaces';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-displayjobs',
  templateUrl: './displayjobs.component.html',
  styleUrls: ['./displayjobs.component.scss'],
})
export class DisplayJobsComponent implements OnInit {
  jobs: Jobs[] = [];
  columns: string[] = ['jobName', 'partId', 'qty', 'Action'];
  index = ['jobName', 'partId', 'qty'];

  constructor(public dialog: MatDialog, public service: JobService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getJobsList().subscribe(
      (response: JobResponse) => {
        this.jobs = response?.Items;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  update(job: Jobs) {
    console.log(job);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    const ref = this.dialog.open(EditDialogComponent, { data: job });

    ref.afterClosed().subscribe((result) => {
      console.log(`Dialog result:  ${result}`);

      if (result) {
        this.service.editJob(result).subscribe((res) => {
          console.log(res);
          this.toastr.success('Record Updated Successfully', 'Quantity Updated');
        });
      }
    });
  }

  delete(job: Jobs) {
    console.log(job);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    const ref = this.dialog.open(DeleteDialogComponent, { data: job });

    ref.afterClosed().subscribe((result) => {
      console.log(`Dialog Result: ${result}`);
      if (result) {
        this.service.deleteJob(result).subscribe(
          (res) => {
            this.toastr.success('Record Deleted Successfully', 'Job Info Deleted');
            this.getData();
          },
          (error) => {
            console.log(error.message);
            this.toastr.error('Part id is foreign key in another table', 'This Job can not be deleted');
          }
        );
      }
    });
  }
}
