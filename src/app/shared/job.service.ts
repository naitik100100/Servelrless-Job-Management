import { Jobs, JobResponse, JobResponse_OrderedJob } from './jobs.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  formData: Jobs;
  public JobsList: Jobs[];

  readonly URL = 'http://companyx-env.eba-niaefern.us-east-1.elasticbeanstalk.com/api';
  //'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  postJobs(formData: Jobs) {
    return this.http.post(this.URL + '/jobs', formData);
    //return a;
  }
  getJobsList() {
    return this.http.get<JobResponse>(this.URL + '/jobs');
  }

  getOneJob(formData: Jobs) {
    return this.http.get<JobResponse>(this.URL + '/jobs/' + formData.jobName + '/' + formData.partId);
  }

  getAllorders() {
    return this.http.get<JobResponse_OrderedJob>(this.URL + '/getAllorders/');
  }

  deleteJob(formData: Jobs) {
    return this.http.delete(this.URL + '/jobs/' + formData.jobName + '/' + formData.partId);
  }

  editJob(formData: Jobs) {
    return this.http.put(this.URL + '/jobs', formData);
  }

  searchJob(jobName: string) {
    return this.http.get<JobResponse>(this.URL + '/searchjobs/' + jobName);
  }
}
