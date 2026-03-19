# TechStore - VTEX IO Theme

Tema personalizado para VTEX IO de TechStore con componentes custom y estilos personalizados.

## Componentes Custom

### BannerHero

Banner de ancho completo con imagen de fondo y texto superpuesto.

- Props: imageUrl, headline, subhead, textPosition, textColor, isLoading
- Posiciones de texto: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
- Soporta skeleton loading para estados de carga

### DiscountFlag

Etiqueta de descuento posicionada dentro del contenedor de imagen del producto.

- Calcula el descuento basado en ListPrice vs Price del contexto del producto
- Props: name, backgroundColor, textColor, isLoading
- Posición absoluta sobre la imagen (no se mueve con hover de la card)

### CountryCarousel

Carrusel de países con selector y formulario de contacto.

- Muestra banderas y capitales de países
- Modal con formulario de contacto
- Estados: idle, loading, success, error

## Instalación

### Requisitos

- Node.js 16.x (VTEX CLI requiere esta versión)
- VTEX CLI instalada (`npm install -g vtex`)

### 1. Vincular el tema

```bash
vtex link
```

### 2. Abrir la tienda

Visita: `https://{account}.myvtex.com`

## Estructura del Proyecto

```
TechStore-vtex/
├── store/
│   └── blocks/
│       ├── home.jsonc          # Configuración de la home
│       ├── tabs-products.json   # Tabs de productos
│       └── footer.json         # Configuración del footer
├── styles/
│   └── css/                    # Estilos CSS por app VTEX
├── react/
│   └── components/
│       ├── BannerHero/
│       ├── DiscountFlag/
│       └── CountryCarousel/
└── manifest.json
```

## Estilos CSS

Los estilos CSS se encuentran en `styles/css/`. Cada archivo debe coincidir con el nombre de la app VTEX.

### Selectores CSS

- Usar `:global()` para selectores de VTEX native
- **No usar selectores de tipo** (img, h1, button, ::-webkit-scrollbar, :after) dentro de `:global()`
- Usar selectores de clase exclusivamente
- Los blockClass se agregan como sufijos: `--blockClassName`

### Ejemplo

```css
/* Correcto */
:global(.vtex-product-summary-2-x-container) {
  display: flex !important;
}

/* Incorrecto - VTEX lo rechazará */
:global(.vtex-product-summary-2-x-container) {
  img {
    /* ... */
  }
}
```

## Decisiones Técnicas

### Ubicación de CSS

- Los archivos CSS deben estar en `styles/css/` (raíz del proyecto)
- **No** en `store/styles/css/`

### Dependencias de Apps

- Agregar siempre las dependencias en `manifest.json` antes de usar nuevos bloques
- Las apps requeridas: vtex.flex-layout, vtex.rich-text, vtex.store-components, etc.

### Selectores de Blocks

- Usar interfaces correctas en JSON (ej: `product-summary.shelf#nombre`)
- Los blockClass deben ser únicos y descriptivos

### Skeleton Loading

- Componentes con carga asíncrona deben soportar prop `isLoading`
- Usar gradientes animados con `background-size: 200%` y `animation`

## Secciones de la Home

1. **Banner Hero** - Banner principal con imagen de fondo
2. **Nuestros Productos** - Tabs con productos por categoría
3. **Banners Promo** - Dos banners promocionales
4. **Productos Destacados** - Slider de productos destacados (colección 13)
5. **Ofertas Especiales** - Slider de ofertas (colección 146)
6. **Por Qué Elegirnos** - Sección informativa
7. **Country Carousel** - Selector de países con contacto

## Colecciones

| Nombre               | ID  |
| -------------------- | --- |
| Productos Destacados | 13  |
| Ofertas Especiales   | 146 |
| Audio                | 123 |
| Wearables            | 124 |
| Computadoras         | 125 |

## Dependencias

```json
"dependencies": {
  "vtex.store": "3.x",
  "vtex.flex-layout": "0.x",
  "vtex.rich-text": "0.x",
  "vtex.store-components": "3.x",
  "vtex.slider-layout": "0.x",
  "vtex.tab-layout": "0.x",
  "vtex.product-context": "0.x",
  "vtex.list-context": "0.x",
  "vtex.product-summary": "2.x",
  "vtex.product-price": "1.x",
  "vtex.add-to-cart-button": "0.x",
  "vtex.store-footer": "2.x",
  "vtex.menu": "2.x"
}
```

## Notas

- Colores principales: #101828 (fondo oscuro), #0f3460 (azul), #ffffff (blanco)
- Footer con fondo #101828 y texto blanco
- Botones "Comprar" con fondo #101828
- Descuentos en DiscountFlag posicionados absolutamente sobre la imagen del producto
