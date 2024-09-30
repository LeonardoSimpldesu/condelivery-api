# CONDELIVERY

## INTRODUÇÃO

O Condelivery é uma solução inovadora que visa transformar a experiência de recebimento de entregas e busca por serviços em prédios e condomínios. Com foco na praticidade, segurança e organização, nossa plataforma oferece uma integração perfeita com aplicativos de delivery já consolidados no mercado, como IFood, Rappi e Uber. Além disso, o aplicativo destaca-se por seu forte apelo social, proporcionando uma funcionalidade que contribui para a geração de empregos, permitindo que pessoas interessadas realizem entregas diretas aos residentes dos condomínios.

## DETALHAMENTO GERAL

### 1. Gestão Eficiente de Encomendas

- Otimização da Logística: O Condelivery otimiza a logística de entregas dentro dos condomínios, garantindo que os moradores recebam suas encomendas de forma ágil e segura.
- Acompanhamento em Tempo Real: A interface amigável permite o acompanhamento em tempo real do status das entregas, proporcionando tranquilidade aos usuários.
- Feedbacks dos Usuários: Proporciona a oportunidade de fornecer feedbacks sobre a qualidade do atendimento e a recepção dos produtos, permitindo melhorias contínuas.

### 2. Oportunidade de Emprego e Socialização

- Oferta e busca de Serviços: Além de receber encomendas, os moradores podem ofertar e buscar serviços por meio do aplicativo.
- Geração de emprego Local: Isso cria oportunidades de emprego local, fortalecendo os laços entre os condôminos e promovendo uma rede de confiança.

### 3. Indicação de Serviços de Terceiros

- Facilidade na Indicação: O Condelivery facilita a indicação de prestadores de serviços, como encanadores, eletricistas e outros profissionais.
- Contribuição para a Economia Local: Essa funcionalidade contribui para a economia local e a qualidade de vida dos moradores.

### 4. Conectividade e Segurança

- Solução Moderna: Em um mundo cada vez mais conectado, o Condelivery oferece uma solução moderna que simplifica a rotina dos condôminos.
- Segurança dos dados: A segurança dos dados e a privacidade dos usuários são garantidas, seguindo as diretrizes da LGPD.

### 5. Suporte ao Usuário

- Horário de Suporte Estendida: A rede de suporte do aplicativo opera em um horário estendido, das 8h às 17h, e abrange uma variedade de temas, incluindo o funcionamento do aplicativo e a integração com serviços de terceiros.

## MODELO DE MONETIZAÇÃO

### Moradores

- Taxa Fixa no Condomínio: Uma taxa fixa é incluída no valor do condomínio para o uso contínuo do aplicativo.
- Acesso Ilimitado: Essa taxa permite acesso ilimitado aos serviços do Condelivery.
- Divisão dos Valores: O valor cobrado é de R$ 20,00 adicionais para cada morador do condomínio, sendo R$ 10,00 destinados ao colaborador responsável pela entrega e R$ 10,00 taxa do aplicativo.
- Limite de Pagamento aos Colaboradores: Há um limite de R$ 1.500,00 pago por colaborador que estará responsável pela entrega, pois a partir dessa quantidade, entendemos que deve haver mais de um colaborador apoiando com as entregas.

### Empresas

- Taxa Fixa para Empresas: Empresas interessadas em oferecer seus serviços no aplicativo pagam uma taxa fixa.
- Benefícios para Prestadores e Moradores: Essa parceria beneficia tanto os prestadores de serviços quanto os moradores

## CONCLUSÃO

Em resumo, o Condelivery é mais do que um sistema de entregas; é uma ferramenta que fornece a comunidade, cria oportunidades e simplifica a vida dos condôminos. Com uma abordagem integrada e focada na segurança e praticidade, o Condelivery se posiciona como uma solução completa para a logística de entregas em condomínios.

## LINK RÁPIDOS

- `Pasta do Projeto (Drive)`:
- `Repositório (Github)`:
- `Deploy (...)`:
- `Aplicação (...)`:
- `Vídeo Pitch (Youtube)`:

##

## TABELAS

### USERS
- ID
- email UNIQUE
- password_hash
- foto_path 
- name
- last_name
- cpf
- celular
- role 

### ADRESS
- ID
- cep
- logradouro
- numero
- bairro
- cidade
- estado
- pais
- complemento?

### CONDOMINIUM
- ID
- name
- ADRESS

### POLICIES
- ID
- TITLE
- DESCRIPTION

### BLOCO
- ID
- NOME
- CONDOMINIUM

### APARTMENT
- ID
- NOME
- BLOCO

### COLABORADOR 
- VALOR_MENSAL
- AVALIACAO
- VALOR_EXCEDENTE

### MORADOR
- APARTMENT
- CONDOMINIUM

### AVALIACAO
- ID
- MORADOR
- COLABORADOR
- nota
- recomendacao

### PEDIDOS (x)
- ID
- status
- codigo
- MORADOR
- COLABORADOR
- created_at

Moquei dados na gambiarra apenas para apresentar no pitch. Aqui estará o relacionamento correto. 