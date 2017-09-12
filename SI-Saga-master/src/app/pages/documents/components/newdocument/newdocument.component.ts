import {Component} from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'newdocument',
  templateUrl: './newdocument.html',
  styleUrls: ['./newdocument.scss']

})
export class Newdocument {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm-dd-yyyy',
};
  constructor() {
  }
}
