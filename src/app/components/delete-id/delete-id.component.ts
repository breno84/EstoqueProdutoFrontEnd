import { Component, OnInit } from '@angular/core';

import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-delete-id',
  templateUrl: './delete-id.component.html',
  styleUrls: ['./delete-id.component.css']
})
export class DeleteIdComponent implements OnInit{

    pessoas: Pessoa[] = [];
  id: number = 0;
  error: string | null = null;
  constructor(private pessoaService: PessoaService) {}

    ngOnInit(): void {}
  
    deletePessoa(): void {
      this.pessoaService.deleteVendasId(this.id).subscribe({
        next: (data) => {
          this.pessoas = data;
          this.error = null;
        },
        error: (err) => {
          this.error = 'Pessoas não encontradas';
          this.pessoas = [];
        }
      });
    }
  }

// // src/app/components/procurar-pessoa-cpfcnpj/procurar-pessoa-cpfcnpj.component.ts
// import { Component, OnInit } from '@angular/core';
// import { PessoaService } from '../../service/pessoa.service';
// import { Pessoa } from '../../models/pessoa';

// @Component({
//   selector: 'app-procurar-pessoa-cpfcnpj',
//   templateUrl: './procurar-pessoa-cpf.component.html',
//   styleUrls: ['./procurar-pessoa-cpf.component.css']
// })
// export class ProcurarPessoaCpfComponent implements OnInit {
//   pessoas: Pessoa[] = [];
//   cpfCnpj: string = '';
//   error: string | null = null;

//   constructor(private pessoaService: PessoaService) {}

//   ngOnInit(): void {}

//   procurarPessoas(): void {
//     this.pessoaService.getAllVendasCpfCnpj(this.cpfCnpj).subscribe({
//       next: (data) => {
//         this.pessoas = data;
//         this.error = null;
//       },
//       error: (err) => {
//         this.error = 'Pessoas não encontradas';
//         this.pessoas = [];
//       }
//     });
//   }
// }
