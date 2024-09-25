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

### PEDIDOS
- ID
- status
- codigo
- MORADOR
- COLABORADOR
- created_at