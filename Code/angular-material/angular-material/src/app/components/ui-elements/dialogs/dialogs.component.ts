import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(SimpleDialog);
  }

  openDialogTwo() {
    this.dialog.open(DialogWithFooter);
  }

  openDialogThree() {
    this.dialog.open(DialogWithContextualHeading);
  }

  ngOnInit() {
  }

}


@Component({
  selector: 'simple-dialog',
  templateUrl: 'simple-dialog.html',
})
export class SimpleDialog {}


@Component({
  selector: 'dialog-with-footer',
  templateUrl: 'dialog-with-footer.html',
})
export class DialogWithFooter {}


@Component({
  selector: 'dialog-with-contextual-heading',
  templateUrl: 'dialog-with-contextual-heading.html',
})
export class DialogWithContextualHeading {}
