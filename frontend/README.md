# Roteiro video de apresentação

## 1 - GraphQl

1. O que é :

    GraphQL significa Graph Query Language, como o nome sugere é uma linguagem de query assim como SQL (Structured Query Language) porém seu uso não envolve implementar banco de dados, mas sim, definir dados seja para API ou servidor.

    **Graph**

    O Graph em GraphQL é para gráfico. O time do Facebook responsável pela linguagem aposta num modelo mental gráfico como uma forma de definir os dados. Dessa forma, a linguagem oferece a habilidade de modelar dados usando schemas. O resultado disso é um paradigma muito parecido com o formato JSON. Por exemplo, para definir um dado que representa um usuário com id, name, email e bio, teríamos o seguinte schema:

        type User {
        id: ID
        name: String
        email: String
        bio: String
        }

    **QL**

    A proposta do GraphQL, porém, não é apenas definir dados em schemas mas também fazer possível que consumidores desses dados disponham de uma forma padronizada de consumi-los. É aí que entra o QL do termo, já que podemos usar uma linguagem de query para fazer chamadas e consumir tais dados. Dessa forma, para consumir dados usando o exemplo de usuário acima, podemos fazer queries como:

        query getUsers {
            users {
                name
                bio
            }
        }
        query getUserById {
            user(id: "123") {
                name
                bio
            }
        }

2. Como funciona
3. Por que utilizamos
    - [Link](https://blog.codecasts.com.br/entendendo-o-que-%C3%A9-graphql-atrav%C3%A9s-de-exemplos-c2fa35e8bf63) util sobre o  graphQl

## 2 - Banco de dados Northwind

1. Processo de uso desse banco
2. Tabela que utilizamos na implementação

## 3 - Back-end

1. Como estão funcionado as requisições para o banco
2. Como esta funcionando a utilização do  Northwind
3. Processo de integração com o front-end

## 4 - Front-end

1. Exibição das paginas dos clientes
    - ***Visão geral da tela***
2. Exibição do crud inserção, remoção, atualização e visualização dos clientes
    - ***Demostração de todo processo do crud***
3. Exibição da tela de compras
    - ***Visão geral da tela***
4. Exibição da inserção de uma comprar com vários produtos
    - ***Demostrar a realização na compra***
5. Exposição do  stored procedure :
    - ***Retorna um relatório a ser exibido***
6. Exposição do trigger ao realizar a inserção de vários produtos
    - ***Visão geral do funcionamento do gatilho***
7. Visualização e inserção de produtos :
    - ***Tópico que foi acrescentado pela equipe***
