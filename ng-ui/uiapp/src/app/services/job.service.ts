import { Injectable } from '@angular/core';
import { Job } from '../job';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  private baseUrl = '/api';

  getJobMatchList(workerId): Promise<any>{
    return this.http.get<any>('/jobengine/jobmatch/'+workerId)
      .toPromise().catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    //console.error('Some error occured', error);
    return Promise.reject(error);
  }
}
