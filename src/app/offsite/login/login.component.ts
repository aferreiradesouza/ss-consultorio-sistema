import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'ss-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoading: boolean = false;
  public errorMessage: string;
  public timeout: any;

  public form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  });

  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

  logar() {
    this.isLoading = true;
    this.errorMessage = null;
    this.authService.logar(this.form.value).then(() => {
      this.isLoading = false;
    }).catch((err) => {
      this.isLoading = false;
      this.errorMessage = err.error.message;
    });
  }
}
