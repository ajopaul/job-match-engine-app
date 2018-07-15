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
    this.error.message = '';
      this.jobService.getJobMatchList(this.workerId).then(
      jobs => { 
            console.log("Recieved object "+jobs);
              if(jobs instanceof Array){
              this.jobs = jobs;
              }else{  
                this.error = jobs;
              }
            },errorMsg => {
                console.log("Received error");
                console.log(errorMsg);
                if(errorMsg.error && errorMsg.error.errors){
                  this.error.message = "Error occured!. "+errorMsg.error.errors[0];
                }else if (errorMsg.error.error){
                  this.error.message = "Error occured!. "+errorMsg.error.error;
                }
                
            }
        );
  }

}
