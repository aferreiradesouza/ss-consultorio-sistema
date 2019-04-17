import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ss-styleguide',
  templateUrl: './styleguide.page.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleGuideComponent implements OnInit {
  public buttonsComPreenchimento: any[] = [
    {label : 'Azul', color: 'azul'},
    {label : 'Cinza', color: 'cinza'},
    {label : 'Verde', color: 'verde'},
    {label : 'Vermelho', color: 'vermelho'},
    {label : 'Amarelo', color: 'amarelo'},
    {label : 'Cyan', color: 'cyan'},
    {label : 'Light', color: 'light'},
    {label : 'Preto', color: 'preto'}
  ];

  public itens: any[] = [1, 2, 3, 4, 5];

  public buttonGroup: any[] = [
    {label : 'btn 1', color: 'azul'},
    {label : 'btn 2', color: 'azul'},
    {label : 'btn 3', color: 'azul'},
  ];

  ngOnInit() {
    console.log(this.buttonsComPreenchimento);
  }
}
