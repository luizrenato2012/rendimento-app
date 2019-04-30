import { Component, OnInit } from '@angular/core';
import { Beneficiario } from './beneficiario';
import { HttpClient } from '@angular/common/http';

const API_URL="http://localhost:8080/api/beneficiario/validacao";

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css']
})
export class BeneficiarioComponent implements OnInit {

  beneficiario: Beneficiario;
  mensagens = [];
  exibeComprovante=false;


  constructor(private httpClient : HttpClient) {
    this.beneficiario = new Beneficiario();
    this.beneficiario.cpf='11111111111';
    this.beneficiario.matricula='1C1111';
   }

  ngOnInit() {
  }

  consulta() {
    this.mensagens=[];
    console.log("Busca " + JSON.stringify (this.beneficiario));
     if(this.beneficiario.matricula==undefined || this.beneficiario.matricula=='') {
      this.mensagens.push({severity: 'error', summary: '', detail: 'Preencha a matricula'});
     }
     if(this.beneficiario.cpf==undefined || this.beneficiario.cpf=='') {
      this.mensagens.push({severity: 'error', summary: '', detail: 'Preencha o CPF'});
     }

     if (this.mensagens.length!=0) {
       return;
     }
    let resultado = null;

    this.httpClient.post<Beneficiario>(API_URL, this.beneficiario)
      .subscribe( result => {
        resultado = result;
        console.log("Resultado: " + JSON.stringify(resultado));
        this.mensagens.push(
          {severity: 'info', 
          summary: 'Consulta realizada com sucesso!', 
          detail:' '});
        this.exibeComprovante=true;
        },
        (error) => {
          console.log('Erro ao pesquisar: ' + error);
          let descricao = error.status==404 ? "Nao encontrado beneficiario!" : "Erro ao pesquisar!";
          this.mensagens.push(
            {severity: 'error', 
            summary: descricao, 
            detail: ""}
            );
        },
        () => {
          console.log('Finalizada pesquisa');
        }
      );
  ;   
  }
  limpa() {
    this.beneficiario = new Beneficiario();
    this.mensagens=[];
    this.exibeComprovante=false;
  }

  baixaComrovante() {
    console.log('Baixando comprpvante');
  }


}
