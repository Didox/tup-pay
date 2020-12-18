import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.prod'

export class Cliente{
  constructor(){ }

  public id:number = 0
  public nome:string = ""
  public email:string = ""
  public telefone:string = ""

  public async get(http: HttpClient){
    let cliente = await http.get<Cliente>(`${environment.api_clientes}/clientes/${this.id}.json`).toPromise()
    this.id = cliente.id
    this.nome = cliente.nome
    this.email = cliente.email
    this.telefone = cliente.telefone
  }
}


