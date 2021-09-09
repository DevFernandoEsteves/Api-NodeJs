

##                         COMANDOS IMORTANTES

'yarn install - Roda as instalações'
yarn tsc - Gera o dist
node dist/server.js - Roda o projeto

Pós Docker

### Docker

    Comandos
    	docker build -t rentex . (executa o build cria a imagem)
    	docker run -p 3333:3333 rentx
    	docker ps - (exibe os containers que estão de pé)
    	docker ps -a - (exibe os containers que estão de pé e não)
    	docker stop +id container - (para a execução do contaiber)
    	docker rm +id container - (Remove o container)
    	docker start (Inícia, 'starta a aplicação')
    	docker exec -it +id container ou o nome + /bin/bash (acessa a máquina) ctrl d sai e ls exibe o conteudo
    	docker logs +id container ou o nome (exibe todos os logs)
    	docker logs -f  +id container ou o nome (monitora todos os logs)
    	docker exec nome container cat /etc/hosts  (Exibe informações sobre a máquina)

    	docker-compose up —build - (gera o build no container)
    	docker-compose up -d - (gera o build no container)
    	docker-compose stop - (para o container)
    	docker-compose down - (remove o container)
    	docker-compose down -v --rmi local
    	docker-compose start - (Inícia, 'starta a aplicação')
    	docker-compose up --force-recreate - (força a recriação da apicação)

### TypeOrm

    https://typeorm.io

    Comandos
    	yarn typeorm migration:run (roda as migrations)
    	yarn typeorm migration:revert (desfaz a migration)

    Criar Migrations
    	yarn typeorm migration:create -n CreateCategories
        yarn typeorm migration:create -n AlterUserDeleteUserName


http://localhost:3333/
