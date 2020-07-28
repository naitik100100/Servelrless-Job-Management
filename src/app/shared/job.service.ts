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

  // deleteJob(formData: Jobs) {
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     }),
  //     body: {
  //       jobName: formData.jobName,
  //       partId : formData.partId.toString(),
  //     }
  //   }
  //   return this.http.delete(this.URL + '/jobs/', options);
  // }

  editJob(formData: Jobs) {
    return this.http.put(this.URL + '/jobs', formData);
  }

  // getOneJob(formData: Jobs) {
  //   return this.http.get<JobResponse>(this.URL + '/jobs/' + formData.jobName + '/' + formData.partId);
  // }

  // searchJob(jobName: string) {
  //   return this.http.get<JobResponse>(this.URL + '/searchjobs/' + jobName);
  // }
}
