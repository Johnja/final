import { Component } from '@angular/core';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {LabelsService} from '../../../../theme/services/labelsService/labels.service';
import {IMyDpOptions} from 'mydatepicker';
import {TypeProjectsService} from '../../../../theme/services/typeProjectsService/typeprojects.service';
import {Authors} from '../../../../theme/services/authorsService/authors';
import {TypeProjects} from '../../../../theme/services/typeProjectsService/typeprojects';
import {Labels} from '../../../../theme/services/labelsService/labels';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewProjectsService} from '../../../../theme/services/viewProjectsService/viewprojects.service';
import {Projects} from '../../../../theme/services/viewProjectsService/projects';
import {ViewSubProjectsService} from '../../../../theme/services/viewSubProjectsService/viewsubprojects.service';
import {SubProject} from '../../../../theme/services/viewSubProjectsService/subproject';


@Component({
  selector: 'editproject',
  styleUrls: ['./editproject.scss'],
  templateUrl: './editproject.html'
})
export class Editproject {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
};
subProject: SubProject = new SubProject();
project: Projects = new Projects();
typeProjects: TypeProjects[];
authors: Authors[];
labels: Labels[];
msgError: string;
author: Authors = new Authors();
label: Labels = new Labels();
  constructor(private _viewAuthorsService : ViewAuthorsService, 
    private _labelsService : LabelsService, 
    private _typeProjectsService : TypeProjectsService,
    private _viewProjectsService: ViewProjectsService,
    private route: ActivatedRoute, 
    private router: Router,
    private _viewSubProjectsService : ViewSubProjectsService ) {
    
    this.loadTypeProjects();
    this.loadAuthors(); 
    this.loadLabels();
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

       saveSubProject(){
        
        
                 this._viewSubProjectsService.addSubProject(this.subProject)
                 .subscribe(
                   rt => console.log(rt),
                   er => console.log(er),
                   () => console.log('Terminado') 
                  
             
                 );
                 
                 
                 }

       updateProject(){
        //  if (!this.project) return;
          this._viewProjectsService.putProject(this.project)
          .subscribe(
            rt => console.log(rt),
            er => console.log(er),
            () => this.goLista()
          );
            }

            updateSubProject(){
              //  if (!this.project) return;
                this._viewProjectsService.putProject(this.project)
                .subscribe(
                  rt => console.log(rt),
                  er => console.log(er),
                  () => this.goLista()
                );
                  }

  

loadTypeProjects(){
  
  
  this._typeProjectsService.getTypeProjects()
  .subscribe(typeProjects => this.typeProjects = typeProjects, error => this.msgError = <any>error);
      }
      loadAuthors(){
        
        
        this._viewAuthorsService.getAuthors()
        .subscribe(authors => this.authors = authors, error => this.msgError = <any>error);
            }

            loadLabels(){
              
              
              this._labelsService.getLabels()
              .subscribe(labels => this.labels = labels, error => this.msgError = <any>error);
                  }


}