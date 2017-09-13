import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './documents.routing';
import { Documents } from './documents.component';
import { Newdocument } from './components/newdocument/newdocument.component';
import { ModalsDocuments } from '../../theme/components/modals/documents/modalsdocuments.component';
import { Viewdocuments } from './components/viewdocuments/viewdocuments.component';
import { Editdocument } from './components/editdocument/editdocument.component';
import { DefaultModalsDocuments } from '../../theme/components/modals/documents/defaultmodalsdocuments/defaultmodalsdocuments.component';
import { ViewDocumentsService} from '../../theme/services/viewDocumentsService/viewdocuments.service';
import { HttpModule } from "@angular/http";
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbModalModule,
    NgbDropdownModule,
    routing,
    HttpModule,
    MyDatePickerModule,
    
  ],
  declarations: [
    Documents,
    Newdocument,
    Viewdocuments,
    Editdocument,
    ModalsDocuments,
    DefaultModalsDocuments,
  
   
  ],
   entryComponents: [
   DefaultModalsDocuments
  ],
  providers: [
    ViewDocumentsService
  ]
})
export class DocumentsModule {
}

