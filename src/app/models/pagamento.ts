import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.prod'
import { Cliente } from './cliente'
import { IPagamentoRetorno } from './iPagamentoRetorno'

export class Pagamento{
  constructor(){ }

  public async enviar(http: HttpClient, cliente:Cliente){
    return await http.post<IPagamentoRetorno>(`${environment.api_pagamento}/pagamento/${cliente.id}`, this).toPromise()
  }
}


