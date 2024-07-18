import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas(): void {
    this.pessoaService.getAllPessoas().subscribe((data: Pessoa[]) => {
      this.pessoas = data;
    }, error => {
      console.error('Erro ao buscar pessoas:', error);
    });
  }
}
