# ABM-SAEN
Control de inventario con SQL + ANGULAR + EXPRESS Y NODE JS

## Descripcion

El proyecto consiste en hacer un ABM (Alta, baja, modificacion), diseñando una API REST con Express, para realizar consultas SQL a una base de datos, del lado del backend, y luego del lado del Frontend utilizar Angular para renderizar una interfaz simple y amigable


## Ejecutar en local

1. Instalar dependencias tanto del cliente como del servidor con `npm install`
2. Instalar XAMPP y ejecutar MySQl
3. Importar inventario.sql, se encuentra dentro de la carpeta database
4. Editar la direccion ip donde sea necesario
5. Dentro de la carpeta server ejecutar `node index.js`
6. Dentro de la carpeta client ejecutar `ng serve`
7. Por defecto veras la pagina en localhost:4200


## Capturas

Alta
![Captura de pantalla 2021-07-15 223113](https://user-images.githubusercontent.com/44885834/125879342-b6b63008-4b27-4b65-a5be-570272c3cbec.png)

Listado
![Captura de pantalla 2021-07-15 223131](https://user-images.githubusercontent.com/44885834/125879344-105dad5b-93be-4de2-b6de-b08aa40c8050.png)

Buscador inteligente
![Captura de pantalla 2021-07-15 223148](https://user-images.githubusercontent.com/44885834/125879347-10f753d0-a2bb-4f07-b7d8-1fc9ec30607f.png)
