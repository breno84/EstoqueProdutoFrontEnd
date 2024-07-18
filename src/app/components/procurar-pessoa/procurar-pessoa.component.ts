import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-procurar-pessoa',
  templateUrl: './procurar-pessoa.component.html',
  styleUrls: ['./procurar-pessoa.component.css']
})
export class ProcurarPessoaComponent implements OnInit {
  pessoa: Pessoa | null = null;
  id: number | null = null;
  error: string | null = null;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {}

  procurarPessoa(): void {
    if (this.id !== null) {
      this.pessoaService.getPessoaById(this.id).subscribe({
        next: (data) => {
          this.pessoa = data;
          this.error = null;
        },
        error: (err) => {
          this.error = 'Pessoa não encontrada';
          this.pessoa = null;
        }
      });
    }
  }
}
