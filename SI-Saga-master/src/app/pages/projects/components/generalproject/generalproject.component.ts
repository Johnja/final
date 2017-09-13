import {Component} from '@angular/core';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {TypeProjectsService} from '../../../../theme/services/typeProjectsService/typeprojects.service';
import {IMyDpOptions} from 'mydatepicker';
import { Observable } from 'rxjs/Rx';
import {Authors} from '../../../../theme/services/authorsService/authors';
import {TypeProjects} from '../../../../theme/services/typeProjectsService/typeprojects';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewProjectsService} from '../../../../theme/services/viewProjectsService/viewprojects.service';
import {Projects} from '../../../../theme/services/viewProjectsService/projects';

@Component({
  selector: 'generalproject',
  templateUrl: './generalproject.html',
})
export class Generalproject {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
};

project: Projects = new Projects();
typeProjects: TypeProjects[];
authors: Authors[];
msgError: string;

author: Authors = new Authors();
typeProject: TypeProjects = new TypeProjects();

  constructor(private _viewAuthorsService : ViewAuthorsService, private _typeProjectsService : TypeProjectsService,
    private _viewProjectsService: ViewProjectsService,
    private route: ActivatedRoute, 
    private router: Router ) {

    this.loadTypeProjects();
    this.loadAuthors();  


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
      
      saveProject(){
       
         this._viewProjectsService.addProject(this.project)
         .subscribe(
           rt => console.log(rt),
           er => console.log(er),
           () => console.log('Terminado') 
          
     
         );         
         
         }
     
  loadTypeProjects(){
    
    
    this._typeProjectsService.getTypeProjects()
    .subscribe(typeProjects =>this.typeProjects = typeProjects, error => this.msgError = <any>error);
        }
        loadAuthors(){
          
          
          this._viewAuthorsService.getAuthors()
          .subscribe(authors =>this.authors = authors, error => this.msgError = <any>error);
              }
  
}
