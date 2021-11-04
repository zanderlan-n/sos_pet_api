# S.O.S. PET - API

Sistema de adoção e procura de animais.

## Instalação

```bash
# clone o repositorio
$ git clone https://gitlab.com/s.o.s-pet/sos_pet_api

# va para a pasta do projeto
$ cd sos_pet_api

# instale as dependencias
$ yarn install

# copie o .env.example como .env
$ cp .env.local .env
```

### Utilização

```bash
# servidor de desenvolvimento com hot reload em http://localhost:2702
$ yarn start
```

Navegue para [http://localhost:1337/admin](http://localhost:1337/admin). O app vai reiniciar automaticamente se algum arquivo for alterado.

### Build

Execute `build` para buildar seu projeto. Os artefados vão estar no `build/` diretorio.

```bash
# build para produção com minificação
$ yarn build
```

## Criador

**Zanderlan Neto**

- <https://github.com/zanderlan-n>

## Framework utilizado

Strapi
