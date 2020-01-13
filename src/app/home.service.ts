import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceList } from './home.model';
import { CookieService } from 'ngx-cookie-service';
import { GETLIST,POSTDATA } from './home.constants';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  getList = GETLIST;
  requestData = POSTDATA;
  constructor(private httpClient: HttpClient, private cookieService:CookieService) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.status !== 200) {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  public getServiceLists() {
    return this.httpClient.get<ServiceList>(`${this.getList}`).pipe(catchError(this.handleError));
  }

  public postFormData(formData: any) { 
    formData.service= this.cookieService.get('service') ? this.cookieService.get('service') : '';
    formData.serviceType = this.cookieService.get('serviceType') ? this.cookieService.get('serviceType') : '';    
    return this.httpClient.post(`${this.requestData}`, formData).pipe(catchError(this.handleError));
  }
}
