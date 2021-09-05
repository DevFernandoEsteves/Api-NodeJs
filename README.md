# Api-NodeJs 
### Sobre
Desenvolvimento desta aplicação baseado no curso da [Rocketseat](https://rocketseat.com.br/ignite), onde é implantado um pouco de cada atividade exercida durante o trabalho para tem como base na hora do desenvolviment.

### Tecnologias Usadas
<img style="width:30%;" src="https://www.docker.com/sites/default/files/d8/2019-07/horizontal-logo-monochromatic-white.png">
<div></div>
<img style="width:30%;" src="https://user-images.githubusercontent.com/53012792/132125479-38b223c4-eceb-4835-b35a-93738adf3c1a.png">
<div></div>
<img style="width:30%;" src="https://miro.medium.com/max/1000/1*ene2JbbzCfPvBtfQII3V6Q.png">

## Requisitos
### Pré Requisitos
| Antesde você começar. Você precisa ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/), [Nodejs](https://nodejs.org/en/) e [Docker](https://docs.docker.com/get-docker/), se tiver trabalando com o Windows precisa configurar o [WSL 2](https://docs.docker.com/desktop/windows/wsl/).
Além disso é bom ter um editor para trabalhar com este código [VsCode](https://code.visualstudio.com/).
##

### Rodando a Api
```bash
# Clone este projeto
$ git clone https://github.com/DevFernandoEsteves/Api-NodeJs.git

# Acesse a pasta do projeto
$ cd Api-NodeJs

# Instala as dependências
$ yarn

# Executa a aplicação em mode de desenvolvimento
$ docker-compose up

```
### A Aplicação roda localmente na porta 3333
http://localhost:3333/

### Documentação Swagger 
Pode acessar a documentação desta Api
http://localhost:3333/api-docs


## Docker

### Comandos Docker

Executa o build cria a imagem do docker.
    
    docker build -t rentex
    
Sobe um Container.

    docker run -p 3333:3333 rentx
    
Exibe os containers que estão de pé.

    docker ps 
    
Exibe os containers que estão de pé e não.
   
    docker ps -a
    
Para a execução do contaiber

    docker stop (+ id ou nome do containe)
    
Remove o container

    docker rm (+ id ou nome do containe)
    
Inícia a aplicação

    docker start
        
Eexibe todos os logs

    docker logs -f (+ id ou nome do containe)

Eexibe todos os logs  (acessa a máquina) ctrl d sai e ls exibe o conteudo

    docker exec -it (+ id ou nome do containe +)/bin/bash
    
Exibe informações sobre a máquina

    docker exec (+ id ou nome do containe)/etc/hosts
    
#
### Comandos Docker Compose
    
Gera o build no container

    docker-compose up —build
    
Sobe um container

    docker-compose up -d
    
Para o container

    docker-compose stop
    
Remove o container

    docker-compose down
    
Remove o container e limpa as variaveis de ambiente

    docker-compose down -v --rmi local
    
Inícia todos os containers

    docker-compose start
    
Força a recriação da apicação

    docker-compose up --force-recreate

## Typeorm

### Comandos TypeOrm

    Comandos
    	yarn typeorm migration:run (roda as migrations)
    	yarn typeorm migration:revert (desfaz a migration)
    Criar Migrations
    	yarn typeorm migration:create -n CreateCategories
#
Made with 💜 by Fernando Esteves [See my LinkedIn](https://www.instagram.com/_nando_esteves/)
