# Smartech

## Acerca de
Este proyecto es sobre un emprendimiento ficticio de venta online de productos de computación.
El sitio, es un ecommerce que cuenta con una página principal donde se muestran todos los productos, y estos pueden filtrarse por categorías usando la barra de navegación.

## Frameworks y bibliotecas
El proyecto está desarrollado con React y Bootstrap. Además es necesaria la instalación del paquete "react-router-dom".

## Organización de las carpetas
En la carpeta "./public/assets" se encuentran todos los archivos de imagenes y archivos json utilizados.
En la carpeta ".src/components" están todos los componentes de React utilizados.

## Carga de productos y categorías
Para simular una llamada a una API con todos los productos y categorías, se crearon dos archivos json que contienen todos los datos, y son obtenidos mediante el método fetch de la API Fetch. Además, para simular la demora en la carga de los datos, estas llamadas usan setTimeout.

## Inicio
Para iniciar el servidor localmente, debe usar el comando "npm start" en la terminal, donde se mostrará la url para que pueda acceder al sitio desde el navegador.