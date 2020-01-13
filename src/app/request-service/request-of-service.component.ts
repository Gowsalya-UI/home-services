import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  } from '@angular/forms';
import { HomeService } from '../home.service';
import { FormRequest } from '../home.model';
import { TIMINGS } from '../home.constants';

@Component({
  selector: 'app-request-of-service',
  templateUrl: './request-of-service.component.html',
  styleUrls: ['./request-of-service.component.css']
})

export class RequestOfServiceComponent implements OnInit {
  requestForm: FormGroup; 
  formRequest: FormRequest;
  requestTimings = TIMINGS;
  constructor(private formBuilder: FormBuilder,private homeService: HomeService) {    
  }
  
  onSumbit(){
    this.formRequest = this.requestForm.value;   
    this.homeService.postFormData(this.formRequest).subscribe(); 
  }

  ngOnInit() {
    this.requestForm = this.formBuilder.group(
      {
        timings: [''],
        description: [''],
      }
    )
  }
   
  get formInfo()
  {
    return this.requestForm.controls;
  }
}
