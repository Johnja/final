import { Component } from '@angular/core';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {LabelsService} from '../../../../theme/services/labelsService/labels.service';
import {IMyDpOptions} from 'mydatepicker';
import {TypeProjectsService} from '../../../../theme/services/typeProjectsService/typeprojects.service';
import {Authors} from '../../../../theme/services/authorsService/authors';
import {TypeProjects} from '../../../../theme/services/typeProjectsService/typeprojects';
import {Labels} from '../../../../theme/services/labelsService/labels';

@Component({
  selector: 'editproject',
  styleUrls: ['./editproject.scss'],
  templateUrl: './editproject.html'
})
export class Editproject {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
};

typeProjects: TypeProjects[];
authors: Authors[];
labels: Labels[];
msgError: string;

  constructor(private _viewAuthorsService : ViewAuthorsService, private _labelsService : LabelsService, private _typeProjectsService : TypeProjectsService ) {
    this.loadTypeProjects();
    this.loadAuthors(); 
    this.loadLabels();
}

loadTypeProjects(){
  
  
  this._typeProjectsService.getTypeProjects().subscribe(typeProjects =>this.typeProjects = typeProjects, error => this.msgError = <any>error);
      }
      loadAuthors(){
        
        
        this._viewAuthorsService.getAuthors().subscribe(authors =>this.authors = authors, error => this.msgError = <any>error);
            }

            loadLabels(){
              
              
              this._labelsService.getLabels().subscribe(labels =>this.labels = labels, error => this.msgError = <any>error);
                  }


}