# Challenge Alkemy BACKEND Node js

Api de Disney para aplicacion a Alkemy

Postgres y PgAdmin se encuentra configurados para funcionar en docker.



## Tech Stack

**Server:** Node, Express, Boom, Nodemailer, Docker
**Data Base:** ORM Sequelize, Postgres


## Environment Variables

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env
Se dejo en la carpeta templates, archivos ejemplos. EMAIL_SERVER es la direccion de correo que entrega nodemail y EMAIL_SERVER_PASSWORD es la password de este correo.

`PORT`

`DB_USER`

`DB_PASSWORD`

`DB_HOST`

`DB_NAME`

`DB_PORT`

`JWT_SECRET`

`EMAIL_SERVER`

`EMAIL_SERVER_PASSWORD`


## Installation

Install my-project with npm

Para el correcto funcionamieno de la API, se debe incluir y confiurar los archivos
docker-compose.yml, .env y .sequelizerc

```bash
  cd my-project
  npm install
  //Iniciar motor de Base de Datos
  npm run migrations:run
  npm run start
```
    
## API Reference

#### Documentacion de enpoints

```http
  /api/doc
```



## Authors

- [@Teobaldo Lunas](https://www.github.com/TeoLunas)

