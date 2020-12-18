import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.prod'
import { Cliente } from '../models/cliente'
import { ISmsResultado } from './iSmsResultado'

export class Sms{
  constructor(){ }
  public de:string = ""
  public para:string = ""
  public conteudo:string = ""

  public async enviar(http: HttpClient, cliente:Cliente){
    return await http.post<ISmsResultado>(`${environment.api_sms}/sms/enviar?cliente_id=${cliente.id}`, this).toPromise()
  }
}


