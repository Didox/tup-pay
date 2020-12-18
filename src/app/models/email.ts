import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.prod'
import { Cliente } from './cliente'
import { IEmailRetorno } from './iEmailRetorno'

export class Email{
  constructor(){ }
  public de:string = ""
  public para:string = ""
  public conteudo:string = ""

  public async enviar(http: HttpClient, cliente:Cliente){
    return await http.post<IEmailRetorno>(`${environment.api_email}/email/enviar?cliente_id=${cliente.id}`, this).toPromise()
  }
}


