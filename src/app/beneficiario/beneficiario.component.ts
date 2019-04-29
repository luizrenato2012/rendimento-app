import { Component, OnInit } from '@angular/core';
import { Beneficiario } from './beneficiario';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

const API_URL="http://localhost:8080/api/beneficiario/validacao";

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css']
})
export class BeneficiarioComponent implements OnInit {

  beneficiario: Beneficiario;

  constructor(private httpClient : HttpClient) {
    this.beneficiario = new Beneficiario();
    this.beneficiario.cpf='11111111111';
    this.beneficiario.matricula='1C1111';
   }

  ngOnInit() {
  }

  consulta() {
    console.log("Busca " + JSON.stringify (this.beneficiario));
    let resultado = null;
    this.httpClient.post<Beneficiario>(API_URL, this.beneficiario)
      .subscribe( result => {
        resultado = result;
        console.log("Resultado: " + JSON.stringify(resultado));
      } );
  ;   
  }

  limpa() {
    this.beneficiario = new Beneficiario();
  }

}
