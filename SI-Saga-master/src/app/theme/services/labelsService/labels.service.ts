import { Injectable } from '@angular/core';
import { Labels } from './labels';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()

export class LabelsService {

  private url = 'http://localhost:8080/label/findall';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    
  }

  getLabels(): Observable<Labels[]>{  
    let url = `${this.url}`;
     return this.http.get(url)
     .map(r => r.json())
     .catch(this.handleError);
    }
    
    private handleError(error:Response | any){
    
    let errMsg: string;
    if(error instanceof Response){
    let body = error.json() || '';
    let err =  body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || '' } ${err}`;
    
    }else{
    
      errMsg= error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
    }

}