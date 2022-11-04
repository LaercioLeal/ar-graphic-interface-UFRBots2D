## Arbot

![GitHub package.json version](https://img.shields.io/github/package-json/v/higorst/ar-graphic-interface) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Python](https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54)

É um sistema, dedicada ao auxílio nos estudos do Aprendizado por Reforço (AR), uma técnica de Inteligência Artificial bastante conhecida e útil. O futebol de robôs aqui abordado, dispõe de um execelente ambiente para execução de experimentos.

Seu fomento ocorreu dentro da UFRBots, a equipe de futebol de robôs da UFRB (Universidade Federal do Recôncavo da Bahia), como uma das etapas de Trabalho de Conclusão de Curso, do Bacharelado em Engenharia de Computação.

---

###### Para Utilizar

---

##### Clonar este repositório

```sh
git clone https://github.com/higorst/ar-graphic-interface.git
```

##### Instalar Dependências

- [Node JS](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions "nodejs")
- [Python v3](https://python.org.br/instalacao-linux/) com os pacotes:
  `flask flask_cors sqlite3 hashlib`

##### Executando projeto

- Acessando pasta do projeto
  ```sh
  cd ar-graphic-interface/
  ```

````

- Instalando dependências
	```sh
npm install
````

ou

```sh
yarn

```

- Para executar _frontend_ + _backend_ com um só comando:
  ```sh
  yarn start

````

- Para executar separadamente: - Primeiro
  ```sh
  yarn start:api

````

    - Segundo (*em outra instância de terminal*)
    ```sh

yarn start:app

```

```
