import { Jobs, JobResponse, JobResponse_OrderedJob } from './jobs.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  formData: Jobs;
  public JobsList: Jobs[];

  readonly URL = 'https://qcutoolbyi.execute-api.us-east-1.amazonaws.com/Dev/api';
  //'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  postJobs(formData: Jobs) {
    return this.http.post(this.URL + '/jobs', formData);
    //return a;
  }
  getJobsList() {
    return this.http.get<JobResponse>(this.URL + '/jobs');
  }

  getAllorders() {
    return this.http.get<JobResponse_OrderedJob>(this.URL + '/getallorders/');
  }

  deleteJob(formData: Jobs) {
    return this.http.put(this.URL + '/ajob/', { jobName: formData.jobName, partId: formData.partId });
  }

  editJob(formData: Jobs) {
    return this.http.put(this.URL + '/jobs', formData);
  }
}
