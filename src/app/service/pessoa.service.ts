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

  deleteVendasId(id: number): Observable<Pessoa[]> {
    console.log(`${this.baseUrl}/deleteId`);
    return this.http.delete<Pessoa[]>(`${this.baseUrl}/delete/${id}`);
  }

  createVenda(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.baseUrl}/create`, pessoa);
  }

  editVenda(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(`${this.baseUrl}/editVenda`, pessoa);
  }


}
