import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/vendas';

  constructor(private http: HttpClient) {}

  getAllPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.baseUrl}`);
  }

  getPessoaById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.baseUrl}/${id}`);
  }

  getAllVendasCpfCnpj(cpfCnpj: String): Observable<Pessoa[]> {
    console.log(`${this.baseUrl}/listaCpfCnpj`);
    return this.http.get<Pessoa[]>(`${this.baseUrl}/listaCpfCnpj?cpfCnpj=${cpfCnpj}`);
  }

}
