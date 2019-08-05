import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-autocomplete-loading',
  templateUrl: './autocomplete-loading.component.html',
  styleUrls: ['./autocomplete-loading.component.scss']
})

export class AutoCompleteLoadingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
}
