export class Artigo {

  nome : string;
  preco : number;
  carrinho : boolean;

  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
    this.carrinho = false;
  }
  
}
