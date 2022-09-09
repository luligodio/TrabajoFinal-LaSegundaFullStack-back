# TrabajoFinal-LaSegundaFullStack-back
Trabajo final del curso FullStack brindado por La Segunda Seguros (back)

Paso 1-instalar package.json

npm i

Paso 2 - Creacion de base de datos

npx sequelize db:create

Paso 3 - Correr Programa

npm run dev

Pasp 4 - 

npx sequelize db:seed:all

Script de migrations and models
npx sequelize model: create--name mesa  --attributes name:string,ingredientes:string,ubicacion:string
npx sequelize model:create --name Header --attributes name:string,id_user:integer,ubicacion:string,fecha:string,id_mesa:integer
npx sequelize model:create --name Factura --attributes id_header:integer,id_producto:integer,cantidad:string,precio:integer
npx sequelize model:create --name Producto --attributes name:string,precio:integer,stock:string,fecha:string,id_categoria:integer
npx sequelize model:create --name Categoria --attributes name:string,descripcion:string
