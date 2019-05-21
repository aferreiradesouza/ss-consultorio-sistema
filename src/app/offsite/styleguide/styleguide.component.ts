import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ss-styleguide',
  templateUrl: './styleguide.page.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleGuideComponent {
  public form = new FormGroup({
    name: new FormControl('')
  });
  public isLoading: boolean = false;
  public buttonsComPreenchimento: any[] = [
    { label: 'Azul', color: 'azul', disabled: false },
    { label: 'Cinza', color: 'cinza', disabled: true },
    { label: 'Verde', color: 'verde', disabled: false },
    { label: 'Vermelho', color: 'vermelho', disabled: false },
    { label: 'Amarelo', color: 'amarelo', disabled: true },
    { label: 'Cyan', color: 'cyan', disabled: false },
    { label: 'Light', color: 'light', disabled: false },
    { label: 'Preto', color: 'preto' , disabled: true}
  ];

  public itens: any[] = [1, 2, 3, 4, 5];

  public buttonGroup: any[] = [
    { label: 'btn 1', color: 'azul' },
    { label: 'btn 2', color: 'azul' },
    { label: 'btn 3', color: 'azul' },
  ];

  alternar() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
