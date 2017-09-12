import {Component} from '@angular/core';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {TypeProjectsService} from '../../../../theme/services/typeProjectsService/typeprojects.service';
import {IMyDpOptions} from 'mydatepicker';
import { Observable } from 'rxjs/Rx';
import {Authors} from '../../../../theme/services/authorsService/authors';
import {TypeProjects} from '../../../../theme/services/typeProjectsService/typeprojects';

@Component({
  selector: 'generalproject',
  templateUrl: './generalproject.html',
})
export class Generalproject {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
};

typeProjects: TypeProjects[];
authors: Authors[];
msgError: string;



  constructor(private _viewAuthorsService : ViewAuthorsService, private _typeProjectsService : TypeProjectsService ) {
    this.loadTypeProjects();
    this.loadAuthors();  

  }
  loadTypeProjects(){
    
    
    this._typeProjectsService.getTypeProjects().subscribe(typeProjects =>this.typeProjects = typeProjects, error => this.msgError = <any>error);
        }
        loadAuthors(){
          
          
          this._viewAuthorsService.getAuthors().subscribe(authors =>this.authors = authors, error => this.msgError = <any>error);
              }
  
}
