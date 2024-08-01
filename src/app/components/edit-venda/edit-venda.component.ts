import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-venda',
  templateUrl: './edit-venda.component.html',
  styleUrls: ['./edit-venda.component.css']
})
export class EditVendaComponent implements OnInit {
  pessoa: Pessoa = {
    id: 0,
    cpfCnpj: '',
    nome: '',
    preco: 0,
    quantidade: 0,
    dataVenda: new Date(), // Inicializada como string
    produto: {
      id: 0,
      nome: '',
      quantidade: 0,
      preco: 0
    }
  };
  
  error: string | null = null;

  constructor(private pessoaService: PessoaService, private router: Router) {
  }

  ngOnInit(): void {}

  editVend(): void {
    this.pessoaService.editVenda(this.pessoa).subscribe({
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
