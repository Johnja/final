import {Injectable} from '@angular/core';
import { Documents } from './documents';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()

export class ViewDocumentsService {

  
  private url = 'http://localhost:8080/document/findall';
  private headers = new Headers({ 'Content-Type': 'application/json' });

 

  constructor(private http: Http) {
    
  }
  getDocuments(): Observable<Documents[]>{  
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