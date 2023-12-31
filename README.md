# Api Rest + test unitarios

## Descripcion

Aplicacion backend desarrollada en Node con Typescript y express.

## Objetivos

1. Consolidar conocimientos basicos de Typescript.
2. Implementar una base de datos Mongo.
3. Implementar contenedores Docker.
4. Hacer test unitarios basicos con Supertest y Jest.

## Por hacer

* [ ] Implementar una base de datos relacional como Postgresql o MySQL.
* [ ] Crear los modelos que realicen las acciones en los recursos para cada tipo de base de datos.

## Modo de uso

Instalar dependencias

`npm i`

En la raiz del proyecto crear un archivo '.env' con las siguientes variables

```yml
PORT=puerto

CONTAINER_NAME=nombre-contenedor

DB_PORT=db-puerto:27017
DB_URI=mongodb://mi-usuario:mi-password@ip:puerto/admin
DB_USER=mi-usuario
DB_PASSWORD=mi-password
```

Donde

`puerto` = puerto en que se ejecuta el servidor.

`db-puerto` = puerto que expone el contenedor.

`mi-usuario` = usuario de la base de datos.

`mi-password` = password de la base de datos.

`ip` = localhost o la ip local 127.0.0.1.

`puerto` = debe ser el mismo que se uso en `db-puerto`.

Crear otro archivo '.env' en la ruta 'src/tests' el cual tendra las variables necesarias para levantar un contenedor exclusivo para los test.

```yml
CONTAINER_NAME=nombre-contenedor

DB_PORT=db-puerto:27017
DB_URI=mongodb://mi-usuario:mi-password@ip:puerto/admin
DB_USER=mi-usuario
DB_PASSWORD=mi-password
```
Ejecutar `npm run` para ver los scripts disponibles.