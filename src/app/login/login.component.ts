import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nominho:string = '';
  senha:string='';
  obj:Array<{nome: string, senha: string}> = []
  validar:boolean = false;

  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  teste(){
    this.obj.push({nome:this.nominho, senha:this.senha})
    console.log(this.obj)
  }

  public logar(){
    
    this.http.post('http://localhost:3012/login', {nome: this.nominho, senha: this.senha}).toPromise().then((response: any) => {
      
      this.validar = true;
      window.localStorage.setItem('token', response.token);
      this.router.navigate(['/cadastro'])
      console.log("Logado");
    });
  }
}
