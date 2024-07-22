import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../models/pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda-cpf',
  templateUrl: './venda-cpf.component.html',
  styleUrls: ['./venda-cpf.component.css']
})
export class VendaCpfComponent implements OnInit {
  pessoa: Pessoa = {
    id: 0,
    cpfCnpj: '',
    nome: '',
    preco: 0,
    quantidade: 0,
    dataVenda: new Date(),
    produto: {
      id: 0,
      nome: '',
      quantidade: 0,
      preco: 0
    }
  };
  error: string | null = null;

  constructor(private pessoaService: PessoaService, private router: Router) {}

  ngOnInit(): void {}

  criarVenda(): void {
    this.pessoaService.createVenda(this.pessoa).subscribe({
      next: (data) => {
        console.log('Venda criada:', data);
        this.error = null;
        this.router.navigate(['/lista-pessoa']);
      },
      error: (err) => {
        this.error = 'Erro ao criar venda';
        console.error(err);
      }
      
    });
  }
}
