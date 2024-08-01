# Proyecto final Luis Ruiz

## Ecommerce Letheria productos en cuero

####  Este ecommerce es una tienda de productos en cuero.

#### Este repositorio contiene la estructura y componentes esenciales para una aplicación web de comercio electrónico de productos de cuero construida con React.

## Estructura del Proyecto
src/
|-- assets/
|   |-- images/
|   |-- styles/
|       |-- main.css
|
|-- components/
|   |-- CartWidget/
|   |   |-- CartWidget.jsx
|   |-- Counter/
|   |   |-- Counter.jsx
|   |   |-- CounterContainer.jsx
|   |-- Footer/
|   |   |-- Footer.jsx
|   |   |-- footer.css
|   |-- Layout/
|   |   |-- Layout.jsx
|   |-- Navbar/
|   |   |-- Navbar.jsx
|   |   |-- navbar.css
|   |-- ProductCard/
|   |   |-- ProductCard.jsx
|
|-- context/
|   |-- CartContext.jsx
|
|-- hooks/
|   |-- useFetch.js
|   |-- usePaginate.js
|
|-- pages/
|   |-- Cart/
|   |   |-- Cart.jsx
|   |-- Checkout/
|   |   |-- Checkout.jsx
|   |-- CheckoutFormik/
|   |   |-- CheckoutFormik.jsx
|   |-- ItemDetailContainer/
|   |   |-- ItemDetail.jsx
|   |   |-- ItemDetailContainer.jsx
|   |   |-- ItemDetail.css
|   |-- ItemListContainer/
|   |   |-- ItemList.jsx
|   |   |-- ItemListContainer.jsx
|
|-- services/
|   |-- firebaseConfig.js
|
|-- utils/
|   |-- products.js
|
|-- App.jsx
|-- index.css
|-- main.jsx


## Componentes

- **Navbar**: La barra de navegación que contiene enlaces a diferentes categorías de productos y un widget del carrito.
- **CartWidget**: Muestra el icono del carrito con una insignia que indica la cantidad de artículos.
- **Footer**: El pie de página de la aplicación web.
- **Layout**: Componente de diseño general para envolver otros componentes.
- **ProductCard**: Muestra la información individual del producto.

## Contexto

- **CartContext**: Administra el estado del carrito de compras en toda la aplicación.

## Hooks

- **useFetch**: Hook personalizado para la obtención de datos.
- **usePaginate**: Hook personalizado para manejar la paginación.

## Páginas

- **Cart**: Muestra los artículos en el carrito de compras.
- **Checkout**: La página de pago para procesar las compras.
- **CheckoutFormik**: Formulario de pago basado en Formik para manejar la entrada del usuario.
- **ItemDetailContainer**: Contiene los detalles del artículo y obtiene información específica del artículo.
- **ItemListContainer**: Muestra una lista de artículos según la categoría seleccionada.

## Servicios

- **firebaseConfig**: Configuración para la integración con Firebase.

## Utilidades

- **products**: Archivo de utilidad que contiene datos de productos.

## Archivos Principales

- **App.jsx**: Componente principal de la aplicación con configuración de enrutamiento.
- **index.css**: Estilos CSS globales.
- **main.jsx**: Punto de entrada de la aplicación, renderiza el componente principal de la aplicación.
