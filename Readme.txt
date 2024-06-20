El proyecto esta desarrollado para conectarse a una base de datos mysql

a cuontinuacion los script de las bases

en el archivo  config.py  se deben configurar los parametros de acceso a la base de datos 



CREATE TABLE andes.task (
	idtarea INT auto_increment NOT NULL,
	titulo varchar(100) NULL,
	descripcion varchar(2000) NULL,
	fechaVencimiento DATE NULL,
	completada BOOL NULL,
	CONSTRAINT task_pk PRIMARY KEY (idtarea)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;




CREATE TABLE andes.products (
	idproduct INT auto_increment NOT NULL,
	nombre varchar(500) NULL,
	descripcion varchar(2000) NULL,
	precio DOUBLE NULL,
	CONSTRAINT products_pk PRIMARY KEY (idproduct)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;


para iniciar el ambiente backend  en Windows  por consola sobre la carpeta del back

venv\Scripts\activate

python app.py



para iniciar el proyecto de angular realizar un
 mpn install
 para descargar los componente esta realizado sobre la versión 18 de Angular

para iniciar la parte grafica en consola se debe realizar el comando:
   ng serve --open   


cuando el ambiente de bak se encurntre activo 


ejemplo envio de products 



Crear un producto (POST)
http://localhost:5001/products
{
  "nombre": "Product 1",
  "descripcion": "Description of Product 1",
  "precio": 99.99
}


Leer todos los productos (GET)
http://localhost:5001/products



Leer un producto por ID (GET)
http://localhost:5001/products/1




Actualizar un producto por ID (PUT)
http://localhost:5001/products/1
{
  "nombre": "Updated Product 1",
  "descripcion": "Updated Description",
  "precio": 79.99
}



Eliminar un producto por ID (DELETE)
http://localhost:5000/products/1