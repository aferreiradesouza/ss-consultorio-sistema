import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ss-collapsible',
  templateUrl: './collapsible.page.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
  public currentHeight?: number;
  public isOpen: boolean;

  @Input() displayLabel: boolean = true;
  @Input() labelOpen?: string = 'Ver mais';
  @Input() labelClose?: string = 'Fechar';
  @Input() defaultStyle?: boolean = false;
  @Input() showIcon?: boolean = true;
  @Input() disableIcon: boolean;

  @ViewChild('content') content: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit() {
  }
  public toggle() {
    if (!this.disableIcon) {
      return;
    }
    this.isOpen ? this.close() : this.open();
  }

  public updateHeight() {
    const content: HTMLDivElement = this.content.nativeElement;

    content.style.maxHeight = `${content.scrollHeight}px`;
    this.currentHeight = content.scrollHeight;
  }

  public close() {
    const content: HTMLDivElement = this.content.nativeElement;
    content.style.maxHeight = "0px";
    this.isOpen = false;
  }

  public open() {
    this.isOpen = true;
    this.updateHeight();
  }
}