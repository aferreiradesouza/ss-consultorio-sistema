import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  @Input() bold?: boolean = false;


  constructor(public router: Router) { }

  ngOnInit() {
  }
}
