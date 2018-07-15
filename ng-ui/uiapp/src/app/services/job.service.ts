import { Injectable } from '@angular/core';
import { Job } from '../job';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  private baseUrl = '/api';

  getJobMatchList(workerId): Promise<Job[]>{
    return this.http.get<Job[]>('/jobengine/jobmatch/'+workerId)
      .toPromise().catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    //console.error('Some error occured', error);
    return Promise.reject(error);
  }
}
