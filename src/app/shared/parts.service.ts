import { HttpClient } from '@angular/common/http';
import { Parts } from './parts.model';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartsService {
  formData: Parts;
  public partsList: Parts[];

  readonly URL = 'https://mjq7oae6m9.execute-api.us-east-1.amazonaws.com/companyY/api';
  constructor(private http: HttpClient) {}

  getPartsList() {
    return this.http.get<Parts[]>(this.URL + '/parts');
  }
}
