# `#7DaysOfCode`

O 7DaysOfCode é um projeto da Alura para os estudantes de tecnologia praticarem o que aprendem nas formações. Durante 1 semana o estudante receberá desafios por email sobre o assunto que ele está estudando. Abaixo separei os desafios de acordo com o dia em que recebi cada, e nas *branches* do repositório estão as minhas respostas.  
  
## Day 1  
  
"...reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:"
```
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```
## Day 2

"... hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:"

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:
```
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
```
### (Exercício Opcional)

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
```
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
```
E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
```
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
```
