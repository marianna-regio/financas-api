# 💲Finanças
## Exercício de criação de API em Javascript

Esta é uma aplicação da web simples, para fins educacionais construído usando HTML, CSS e JavaScript que permite monitorar ganhos e despesas. 
Você pode adicionar, editar ou excluir transações, e o aplicativo calcula seu saldo somando receitas positivas e subtraindo despesas negativas. 
A aplicação usa a biblioteca json-server para simular um back-end e armazenar transações financeiras.

![image](https://github.com/marianna-regio/financas-api/assets/126937060/1cd60c19-0e35-4206-9f14-a480a53d0c13)



### Rodando a aplicação

- Para clonar o repositorio é necessario ter instalados em seu computador o node.js e o git
- Você deve criar uma pasta no seu computador, acessá-la no terminal e executar os comandos:
```
$ git init

$ git clone https://github.com/marianna-regio/financas-api.git

$ cd financas-api

$ npm init

$ npm run server
```

O script "server" roda o json-server e fica observando por mudanças no arquivo db.json, onde as transações são armazenadas.

É importante que o servidor esteja rodando para funcionamento da aplicação, portanto o terminal deve permanecer aberto.







## ⚙️ Funcionamento


- Quando a página é carregada, a função setup() é chamada para buscar as transações existentes no json-server, renderizá-las na página e atualizar o saldo.

- A função saveTransaction(ev) é acionada quando você envia o formulário de transação. Ele verifica se você está editando uma transação existente ou criando uma nova. Para edição, atualiza a transação no servidor e atualiza o saldo. Para criar, adiciona a nova transação ao servidor e atualiza o saldo.

- As funções createTransactionContainer(id), createTransactionTitle(name), createTransactionAmount(amount), createEditTransactionBtn(transaction), e createDeleteTransactionBtn(id)são responsáveis ​​por criar os elementos necessários para cada transação, como container, título, exibição de valor, botão editar e botão excluir.

- A renderTransaction(transaction) monta esses elementos para uma transação e os anexa ao container de transações na página da web.

- updateBalance() calcula o saldo somando todos os valores da transação e atualiza a exibição do saldo na página.

- O ouvinte de eventos no formulário aciona a função saveTransaction quando uma transação é enviada.
