# TechStore - VTEX IO Theme

Tema personalizado para VTEX IO de TechStore con componentes custom y estilos personalizados.

## Componentes Custom

### BannerHero

Componente de banner de ancho completo con imagen de fondo y texto superpuesto.

- Props configurables: imageUrl, headline, subhead, textPosition, textColor
- Posiciones de texto: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right

### DiscountFlag

Componente de etiqueta de descuento que muestra el porcentaje de descuento calculado automáticamente.

- Calcula el descuento basado en ListPrice vs Price del contexto del producto
- Props: name, backgroundColor, textColor

### CountryCarousel

Carrusel de países con selector y formulario de contacto.

- Muestra banderas y capitales de países
- Modal con formulario de contacto
- Estados: idle, loading, success, error
- Skeleton loading mientras carga

## Estructura del Proyecto

```
TechStore-vtex/
├── store/
│   └── blocks/
│       ├── home.jsonc          # Configuración de la home
│       ├── tabs-products.json   # Tabs de productos
│       └── footer.json         # Configuración del footer
├── styles/
│   └── css/
│       ├── vtex.flex-layout.css
│       ├── vtex.product-summary.css
│       ├── vtex.slider-layout.css
│       ├── vtex.rich-text.css
│       ├── vtex.store-components.css
│       ├── vtex.store-footer.css
│       └── vtex.tab-layout.css
├── react/
│   ├── components/
│   │   ├── BannerHero/
│   │   ├── DiscountFlag/
│   │   └── CountryCarousel/
│   └── tests/
│       ├── BannerHero.test.ts
│       ├── DiscountFlag.test.ts
│       └── CountryCarousel.test.ts
└── manifest.json
```

## Instalación

### 1. Instalar dependencias del tema

```bash
cd react
yarn install
```

### 2. Vincular el tema con VTEX

```bash
vtex link
```

### 3. Abrir la tienda

Visita: https://pruebamiguelcaballero--vugravity.myvtex.com

## Scripts Disponibles

### Tests

```bash
cd react
yarn test              # Ejecutar todos los tests
yarn test:watch        # Modo watch para desarrollo
yarn test:coverage      # Generar reporte de cobertura
```

## Estilos CSS

Los estilos CSS se encuentran en `styles/css/`. Cada archivo corresponde a una app de VTEX:

| Archivo                   | App VTEX              |
| ------------------------- | --------------------- |
| vtex.flex-layout.css      | vtex.flex-layout      |
| vtex.product-summary.css  | vtex.product-summary  |
| vtex.slider-layout.css    | vtex.slider-layout    |
| vtex.rich-text.css        | vtex.rich-text        |
| vtex.store-components.css | vtex.store-components |
| vtex.store-footer.css     | vtex.store-footer     |
| vtex.tab-layout.css       | vtex.tab-layout       |

### Selectores CSS

- Usar `:global()` para selectores de VTEX native
- No usar selectores de tipo (img, h1, etc.) dentro de `:global()`
- Los blockClass se agregan como sufijos: `--blockClassName`

## Secciones de la Home

1. **Banner Hero** - Banner principal con imagen de fondo
2. **Nuestros Productos** - Tabs con productos por categoría (Todos, Audio, Wearables, Computadoras)
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

- vtex.store
- vtex.flex-layout
- vtex.rich-text
- vtex.store-components
- vtex.slider-layout
- vtex.shelf
- vtex.product-summary
- vtex.css-handles
- vtex.tab-layout
- vtex.product-context
- vtex.list-context
- vtex.product-review-interfaces
- vtex.seller-selector
- vtex.device-detector
- vtex.add-to-cart-button
- vtex.store-footer
- vtex.menu

## Notas

- Los colores del tema usan principalmente: #101828 (fondo oscuro), #0f3460 (azul), #ffffff (blanco)
- El footer tiene fondo #101828 con texto blanco
- Los botones de "Comprar" usan fondo #101828 con texto blanco
- Los banners promo tienen filtro de brillo para mejor legibilidad del texto
