# Evolutone

> Aplicação criada com Django Templates para progresso de estudo em tirar músicas de ouvido.

## 📌 Sobre o projeto

O **Evolutone** é uma aplicação desenvolvida com Django Templates que auxilia músicos e estudantes a aprimorarem suas habilidades auditivas. A plataforma permite que os usuários acompanhem seu progresso no treinamento de percepção musical.

## 🚀 Tecnologias utilizadas

- **Figma** - Para desenvolvimento do mockup [link do mockup](https://www.figma.com/design/5dhG5pFQQ0IvHwMS2LhR19/Evolutone?node-id=0-1&t=y3RURiGuCYy5B1pS-1)
- **Django** - Framework web em Python
- **Django Templates** - Sistema de templates para renderização de páginas
- **HTML, CSS e JavaScript** - Para construção da interface
- **SQLite** (ou outro banco de dados) - Para armazenar os dados dos usuários e progresso

## 🔧 Como executar o projeto

### 1️⃣ Pré-requisitos
Certifique-se de ter o **Python 3.x** e o **pip** instalados na sua máquina.

### 2️⃣ Clonar o repositório
```sh
 git clone https://github.com/seu-usuario/evolutone.git
 cd evolutone
```

### 3️⃣ Criar e ativar um ambiente virtual (opcional, mas recomendado)
```sh
 python -m venv venv
 source venv/bin/activate  # Para Linux/Mac
 venv\Scripts\activate  # Para Windows
```

### 4️⃣ Instalar as dependências
```sh
 pip install -r requirements.txt
```

### 5️⃣ Aplicar migrações do banco de dados
```sh
 python manage.py migrate
```

### 6️⃣ Executar o servidor
```sh
 python manage.py runserver
```
Acesse a aplicação no navegador: [http://127.0.0.1:8000](http://127.0.0.1:8000)

## 🛠 Funcionalidades

- 🎵 Montagem do repertorio com base no avanço do usuario;
- 📊 Acompanhamento do progresso do usuário;
- 🎼 criação de tarefas.

## 🏛 Modelagem do Banco de Dados

Abaixo estão algumas das principais tabelas do banco de dados da aplicação:

### 📌 Usuário (`User`)

### 📌 Exercício (`Exercicio`)

### 📌 Progresso (`Progresso`)

## 📁 Estrutura do projeto
```
Evolutone/
│── evolutone/           # Diretório do projeto Django
│── templates/           # Templates HTML para renderização
│── static/              # Arquivos estáticos (CSS, JS, imagens)
│── db.sqlite3           # Banco de dados SQLite (caso esteja usando)
│── manage.py            # Arquivo principal para gerenciamento do Django
│── requirements.txt     # Dependências do projeto
```

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e contribuir!

---
Desenvolvido por [Carlos Gabriel](https://github.com/CarlosG18) 🎸


