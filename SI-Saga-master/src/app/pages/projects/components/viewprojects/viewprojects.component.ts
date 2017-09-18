import { Component } from '@angular/core';
import { ViewProjectsService } from '../../../../theme/services/viewProjectsService/viewprojects.service';
import { ViewSubProjectsService } from '../../../../theme/services/viewSubProjectsService/viewsubprojects.service';
import { ViewAuthorsService } from '../../../../theme/services/authorsService/viewauthors.service';
import { LabelsService } from '../../../../theme/services/labelsService/labels.service';
import { TypeProjectsService } from '../../../../theme/services/typeProjectsService/typeprojects.service';
import { IMyDpOptions } from 'mydatepicker';
import { Authors } from '../../../../theme/services/authorsService/authors';
import { TypeProjects } from '../../../../theme/services/typeProjectsService/typeprojects';
import { Labels } from '../../../../theme/services/labelsService/labels';
import { Projects } from '../../../../theme/services/viewProjectsService/projects';
import { SubProject } from '../../../../theme/services/viewSubProjectsService/subproject';


@Component({
  selector: 'viewprojects',
  templateUrl: './viewprojects.html',
  styleUrls: ['./viewprojects.scss']
})
export class Viewprojects  {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  typeProjects: TypeProjects[];
  projects: Projects[];
  subProject: SubProject[];
  authors: Authors[];
  labels: Labels[];
  msgError: string;
  filterQuery = "" ;
  rowsOnPage = 10;
  sortBy = 'shortnamegnr';
  sortOrder = 'asc';

  constructor(private _viewProjectsService: ViewProjectsService,
    private _viewSubProjectsService: ViewSubProjectsService,
    private _viewAuthorsService: ViewAuthorsService,
    private _labelsService: LabelsService, private _typeProjectsService: TypeProjectsService) {

    this.loadTypeProjects();
    this.loadAuthors();
    this.loadLabels();
    this.loadProjects();
    this.loadSubProjects();
   
  }


  toInt(num: string) {
    return +num;
}

sortByWordLength = (a: any) => {
    return a.shortnamegnr.length;
}

  loadSubProjects() {

    this._viewSubProjectsService
      .getSubProjects().subscribe(subProject => this.subProject = subProject, error => this.msgError = <any>error);
  }

  loadProjects() {

    this._viewProjectsService
      .getProjects().subscribe(projects => this.projects = projects, error => this.msgError = <any>error);
  }

  loadTypeProjects() {
    this._typeProjectsService.getTypeProjects()
      .subscribe(typeProjects => this.typeProjects = typeProjects, error => this.msgError = <any>error);
  }

  loadAuthors() {

    this._viewAuthorsService.getAuthors()
      .subscribe(authors => this.authors = authors, error => this.msgError = <any>error);
  }

  loadLabels() {

    this._labelsService.getLabels().
      subscribe(labels => this.labels = labels, error => this.msgError = <any>error);
  }

}

