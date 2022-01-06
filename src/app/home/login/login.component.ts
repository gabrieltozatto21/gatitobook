import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: string = '';
  pass: string = '';

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.autenticar(this.user, this.pass).subscribe(() => {
      console.log("autenticado com sucesso!");

    },(erro) => {
      alert('usuario ou senha inválido!')
      console.log(erro.message);

    })

  }

}
