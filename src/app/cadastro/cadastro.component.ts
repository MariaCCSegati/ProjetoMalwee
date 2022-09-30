import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nominho:string = '';
  senha:string='';
  obj:Array<any> = []
  validar:boolean = true;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  public teste(){
    this.obj.push({nome:this.nominho, senha:this.senha})
    console.log(this.obj)
  }

  list(){
      this.http.get('http://localhost:3012/',{}).toPromise().then((response: any) => {
        this.obj = response;    
        this.teste();
      });
  
}

  insert(){ 
      this.http.post('http://localhost:3012/add', {nome: this.nominho, senha: this.senha}).toPromise().then((response: any) => {
        console.log('Passou aqui');
        this.list();
      });    
  }

  public delete(){
      this.http.post('http://localhost:3012/delete', {nome: this.nominho, senha: this.senha}).toPromise().then((response: any) => {
        console.log('Deletou');
        this.list();
      }); 
  }

  public logar(){
    
    this.http.post('http://localhost:3012/login', {nome: this.nominho, senha: this.senha}).toPromise().then((response: any) => {
      console.log(response);
      this.validar = true;
    });
  }
}
