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

  id: number = 0;
  error: string | null = null;

  selectedPessoa: any = null;
  selectedPessoaIndex: number | null = null;

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
  deletePessoa(id: number): void {
    const confirmDelete = window.confirm('Você tem certeza de que deseja excluir esta pessoa?');
  
    if(confirmDelete){
      this.pessoaService.deleteVendasId(id).subscribe(
        response => {
          console.log('Pessoa deletada:', response);
          window.location.reload();
          // Atualize a lista de pessoas para refletir a exclusão
          this.pessoas = this.pessoas.filter(pessoa => pessoa.id !== id);
        },
        // error => {
        //   console.error('Erro ao deletar pessoa:', error);
        //   this.error = 'Erro ao deletar pessoa.';
        // }
    
      );
      window.location.reload();
    }
    else{
      console.log("Exclusao cancelada!")
    }
  }

  buttonEditVenda(pessoa: any) {
    this.selectedPessoa = pessoa;
  }
  closeDetails() {
    this.selectedPessoa = null;
    this.selectedPessoaIndex = null;
  }

  saveChanges() {
    if (this.selectedPessoaIndex !== null) {
      const index = this.pessoas.findIndex(p => p.id === this.selectedPessoa.id);
      if (index > -1) {
        this.pessoas[index] = this.selectedPessoa;
      }
      this.closeDetails(); 
    }
  }

  toggleEdit(index: number): void {
    this.selectedPessoaIndex = this.selectedPessoaIndex === index ? null : index;
  }

}
