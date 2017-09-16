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

  constructor(private _viewDocumentsService: ViewDocumentsService) {

    this.loadDocuments();
  }

  loadDocuments() {

    this._viewDocumentsService.getDocuments().subscribe(documents => this.documents = documents, error => this.msgError = <any>error);
  }
}
