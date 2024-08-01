import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Importação dos componentes
import { ListaPessoaComponent } from './components/lista-pessoa/lista-pessoa.component';
import { ProcurarPessoaComponent } from './components/procurar-pessoa/procurar-pessoa.component';
import { ProcurarPessoaCpfComponent } from './components/procurar-pessoa-cpf/procurar-pessoa-cpf.component';
import { DeleteIdComponent } from './components/delete-id/delete-id.component';
import { VendaCpfComponent } from './components/venda-cpf/venda-cpf.component';
import { EditVendaComponent } from './components/edit-venda/edit-venda.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    ProcurarPessoaComponent,
    ProcurarPessoaCpfComponent,
    DeleteIdComponent,
    VendaCpfComponent,
    EditVendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
