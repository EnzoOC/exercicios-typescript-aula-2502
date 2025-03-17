// Mensagem inicial
let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

console.log("\n"); // Espaço entre os exercícios

// Exercício 1 - Tipagem e Arrays
console.log("Exercício 1 - Soma de valores em um array:");
let valores: number[] = [20, 30, 40]; // Alterado para 20, 30, 40
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

console.log("\n"); // Espaço entre os exercícios

// Exercício 2 - Função Tipada
console.log("Exercício 2 - Mensagem personalizada:");
function mensagemPersonalizada(nome: string): string {
  return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Enzo Cunha")); // Alterado para "Enzo Cunha"

console.log("\n"); // Espaço entre os exercícios

// Exercício 3 - Classe e Instância
console.log("Exercício 3 - Classe Carro e método detalhes:");
class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    public ano: number
  ) {}
  detalhes(): string {
    return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
  }
}
const carro1 = new Carro("Toyota", "Corolla", 2024); // Alterado para "Toyota", "Corolla", 2024
console.log(carro1.detalhes());
