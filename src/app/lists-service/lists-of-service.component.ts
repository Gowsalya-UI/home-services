import { Component, OnInit, OnDestroy  } from '@angular/core';
import { HomeService } from '../home.service';
import { CookieService } from 'ngx-cookie-service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lists-of-service',
  templateUrl: './lists-of-service.component.html',
  styleUrls: ['./lists-of-service.component.css']
})
export class ListsOfServiceComponent implements OnInit,OnDestroy  {
  serviceList : any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private homeService: HomeService,private cookieService: CookieService) { }

  ngOnInit() {
    this.homeService.getServiceLists().pipe(takeUntil(this.destroy$)).subscribe(
      (res) => this.serviceList = res
    )
  }
  
  selectedValue(type, desc){
    this.cookieService.set('service',type);
    this.cookieService.set('serviceType',desc);
  }

  ngOnDestroy() {
    this.destroy$.next(true);    
    this.destroy$.unsubscribe();
  }
}
