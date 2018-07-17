import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-match',
  templateUrl: './job-match.component.html',
  styleUrls: ['./job-match.component.css']
})
export class JobMatchComponent implements OnInit {

  jobs: Job[];
  workerId: number;
  error: any = {message:''};



  constructor(private jobService: JobService) { 
  }

  ngOnInit() {
  }

  getJobMatchList(): void {
    this.jobs = [];
    this.error.message = '';
      this.jobService.getJobMatchList(this.workerId).then(
      res => { 
            console.log("Recieved object: "+res);
              this.jobs = res.data;
              this.error.message = res.errorMessage;
            },errRes => {
                console.log("Received error: "+errRes);
                if(errRes.error.errorMessage){
                  this.error.message = errRes.error.errorMessage;
                }else if(errRes.error && errRes.error.error){
                  this.error.message = errRes.error.error;
                }
                
            }
        );
  }

}
