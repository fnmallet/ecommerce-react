# Smartech

Link del sitio: https://bright-mousse-8dcc07.netlify.app/
## Acerca de
Este proyecto es sobre un emprendimiento ficticio de venta online de productos de computación.
El sitio, es un ecommerce que cuenta con una página principal donde se muestran todos los productos, y estos pueden filtrarse por categorías usando el panel de navegación.
Al hacer clic sobre cualquier producto se muestra un detalle del mismo desde donde se puede elegir la cantidad de ese producto que se desea agregar a un carrito, al que se puede agregar más de un tipo de producto.
Para finalizar la compra, hay que hacer clic sobre el botón "Finalizar compra" en la página del carrito, completar el formulario y luego hacer clic en "Generar orden". A continuación se mostrará una id que corresponde a la orden generada, y se vaciará el carrito, volviendo al estado inicial.

![Gif con las funcionalidades del sitio](https://https://bright-mousse-8dcc07.netlify.app/assets/github/react-ecommerce.gif)

## Frameworks y bibliotecas
El proyecto está desarrollado con React y Bootstrap. Además se utilizan las bibliotecas de "react-router-dom" y "firebase". Para instalar estas dependencias con npm:
```sh
npm install react-router-dom
npm install firebase
```

## Productos mostrados en el sitio
La información de todos los productos mostrados en el sitio están almacenados una base de datos de Firebase.

## Inicio
Para iniciar el servidor localmente, utilizar el siguiente comando:
```sh
npm start
```