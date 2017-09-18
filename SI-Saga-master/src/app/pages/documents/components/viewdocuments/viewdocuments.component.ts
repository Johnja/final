import { Component } from '@angular/core';
import { ViewDocumentsService } from '../../../../theme/services/viewDocumentsService/viewdocuments.service';
import { IMyDpOptions } from 'mydatepicker';
import { Documents } from '../../../../theme/services/viewDocumentsService/documents';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'viewdocuments',
  templateUrl: './viewdocuments.html',
  styleUrls: ['./viewdocuments.scss']
})

export class Viewdocuments {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  documents: Documents[];
  msgError: string;
  filterQuery = "" ;
  rowsOnPage = 10;
  sortBy = 'shortnamegnr';
  sortOrder = 'asc';

  constructor(private _viewDocumentsService: ViewDocumentsService) {

    this.loadDocuments();
  }

  
  toInt(num: string) {
    return +num;
}

sortByWordLength = (a: any) => {
    return a.shortnamegnr.length;
}


  loadDocuments() {

    this._viewDocumentsService.getDocuments()
    .subscribe(documents => this.documents = documents, error => this.msgError = <any>error);
  }
}
