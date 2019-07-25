import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {

  @Input() title: string;


  constructor(public router: Router) { }

  ngOnInit() {
  }
}
