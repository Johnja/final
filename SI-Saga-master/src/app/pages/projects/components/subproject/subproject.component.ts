import {Component} from '@angular/core';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {LabelsService} from '../../../../theme/services/labelsService/labels.service';
import {IMyDpOptions} from 'mydatepicker';
import { Observable } from 'rxjs/Rx';
import {Authors} from '../../../../theme/services/authorsService/authors';
import {Labels} from '../../../../theme/services/labelsService/labels';

@Component({
  selector: 'subproject',
  templateUrl: './subproject.html',
  styleUrls: ['./subproject.scss']
})
export class Subproject {
  
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm-dd-yyyy',
};

authors: Authors[];
labels: Labels[];
msgError: string;
 

  constructor(private _viewAuthorsService : ViewAuthorsService, private _labelsService : LabelsService ) {
    this.loadAuthors();
    this.loadLabels();  
  }

  loadAuthors(){
    
    
    this._viewAuthorsService.getAuthors().subscribe(authors =>this.authors = authors, error => this.msgError = <any>error);
        }
        loadLabels(){
          
          
          this._labelsService.getLabels().subscribe(labels =>this.labels = labels, error => this.msgError = <any>error);
              }


}
