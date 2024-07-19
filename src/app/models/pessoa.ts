import { Produto } from "./produto";

export interface Pessoa {
  id: number;
  cpfCnpj: string;
  nome: string;
  preco: number;
  quantidade: number;
  dataVenda: Date;
  produto: Produto;
}
