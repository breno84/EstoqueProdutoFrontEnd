import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoaComponent } from './components/lista-pessoa/lista-pessoa.component';
import { ProcurarPessoaComponent } from './components/procurar-pessoa/procurar-pessoa.component';
import { ProcurarPessoaCpfComponent } from './components/procurar-pessoa-cpf/procurar-pessoa-cpf.component';
import { DeleteIdComponent } from './components/delete-id/delete-id.component';
import { VendaCpfComponent } from './components/venda-cpf/venda-cpf.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-pessoa', pathMatch: 'full' },
  { path: 'lista-pessoa', component: ListaPessoaComponent },
  { path: 'procurar-pessoa', component: ProcurarPessoaComponent },
  { path: 'procurar-pessoa-cpf',component: ProcurarPessoaCpfComponent},
  { path: 'delete-id',component: DeleteIdComponent},
  { path: 'create-venda',component: VendaCpfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
