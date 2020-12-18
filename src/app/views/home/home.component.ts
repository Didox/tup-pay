import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente'
import { Sms } from '../../models/sms'
import { Email } from '../../models/email'
import { Pagamento } from '../../models/pagamento'
import { ISmsResultado } from '../../models/iSmsResultado'
import { IEmailRetorno } from '../../models/iEmailRetorno'
import { IPagamentoRetorno } from '../../models/iPagamentoRetorno'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  public cliente:Cliente
  public mensagem:string

  ngOnInit(): void {
    this.carregaCliente()
  }

  async enviarSMS(cliente:Cliente){
    let retorno:ISmsResultado = await new Sms().enviar(this.http, cliente);
    this.mensagem = JSON.stringify(retorno)
  }
  async enviarEmail(cliente:Cliente){
    let retorno:IEmailRetorno = await new Email().enviar(this.http, cliente);
    this.mensagem = JSON.stringify(retorno)
  }

  async fazerPagamento(cliente:Cliente){
    let retorno:IPagamentoRetorno = await new Pagamento().enviar(this.http, cliente);
    this.mensagem = JSON.stringify(retorno)
  }

  async carregaCliente(){
    this.cliente = new Cliente();
    this.cliente.id = 1;
    await this.cliente.get(this.http);
  }

}
