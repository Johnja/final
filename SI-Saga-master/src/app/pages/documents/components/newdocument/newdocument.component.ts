import {Component} from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { Observable } from 'rxjs/Rx';
import {Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewDocumentsService} from '../../../../theme/services/viewDocumentsService/viewdocuments.service';
import {Documents} from '../../../../theme/services/viewDocumentsService/documents';
import {ViewSubProjectsService} from '../../../../theme/services/viewSubProjectsService/viewsubprojects.service';
import {SubProject} from '../../../../theme/services/viewSubProjectsService/subproject';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'newdocument',
  templateUrl: './newdocument.html',
  styleUrls: ['./newdocument.scss']

})
export class Newdocument {
 
 document: Documents = new Documents();

 msgError: String;

public fileUploaderOptions:NgUploaderOptions = {
  // url: 'http://website.com/upload'
  url: '',
};

  public  myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
}

  constructor(
   private _viewDocumentsService: ViewDocumentsService,
   
    private route: ActivatedRoute,
    private router: Router) {

      
 }
 
  ngOnitInit(){
    let id = this.route.snapshot.params['id'];
    if (!id) return;
    
    console.log(id);
    
    }
  
  
  goLista(){
  
  let link = [];
  this.router.navigate(link);
  
  }
  
    saveDocument(){

      
      this._viewDocumentsService.addDocument(this.document)
      .subscribe(
        rt => console.log(rt),
        er => console.log(er),
        () => console.log('Terminado') 
       
  
      );
      
      
      }
  
   


}
