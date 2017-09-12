import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'editdocument',
  templateUrl: './editdocument.html',
  styleUrls: ['./editdocument.scss']
})
export class Editdocument {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm-dd-yyyy',
};

    constructor() {
    
  }

    
}
