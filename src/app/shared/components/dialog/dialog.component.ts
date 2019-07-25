import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'ss-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {
  public isOpen: boolean = false;

  constructor(public router: Router, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }

  public toggle() {
    this.isOpen ? this.close() : this.open();
  }

  public open() {
    this.document.body.style = 'overflow: hidden';
    this.isOpen = true;
  }

  public close() {
    this.document.body.style = 'overflow: none';
    this.isOpen = false;
  }
}
