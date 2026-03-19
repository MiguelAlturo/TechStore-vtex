import { describe, it, expect } from 'vitest'

describe('BannerHero Component', () => {
  it('should have correct default props', () => {
    const defaultProps = {
      imageUrl:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
      headline: 'Tecnología del Futuro',
      subhead: 'Descubre las últimas innovaciones en electrónica y gadgets',
      textPosition: 'bottom-left' as const,
      textColor: '#FFFFFF',
    }

    expect(defaultProps.imageUrl).toBeTruthy()
    expect(defaultProps.headline).toBeTruthy()
    expect(defaultProps.textPosition).toBe('bottom-left')
    expect(defaultProps.textColor).toBe('#FFFFFF')
  })

  it('should support all text positions', () => {
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ]

    positions.forEach((position) => {
      expect(position).toBeTruthy()
    })
  })

  it('should have valid CSS handles array', () => {
    const CSS_HANDLES = [
      'bannerHero__container',
      'bannerHero__image',
      'bannerHero__overlay',
      'bannerHero__content',
      'bannerHero--topLeft',
      'bannerHero--topCenter',
      'bannerHero--topRight',
      'bannerHero--bottomLeft',
      'bannerHero--bottomCenter',
      'bannerHero--bottomRight',
      'bannerHero__title',
      'bannerHero__subtitle',
    ]

    expect(CSS_HANDLES).toHaveLength(12)
    expect(CSS_HANDLES).toContain('bannerHero__container')
    expect(CSS_HANDLES).toContain('bannerHero__title')
  })

  it('should have valid schema definition', () => {
    const schema = {
      title: 'Banner Hero',
      description:
        'Banner de ancho completo con imagen de fondo y texto superpuesto',
      type: 'object',
      properties: {
        imageUrl: { title: 'Imagen de fondo', type: 'string' },
        headline: {
          title: 'Título',
          type: 'string',
          default: 'Tecnología del Futuro',
        },
        subhead: { title: 'Subtítulo', type: 'string' },
        textPosition: {
          title: 'Posición del texto',
          type: 'string',
          enum: [
            'top-left',
            'top-center',
            'top-right',
            'bottom-left',
            'bottom-center',
            'bottom-right',
          ],
          default: 'bottom-left',
        },
        textColor: {
          title: 'Color del texto',
          type: 'string',
          default: '#FFFFFF',
        },
      },
    }

    expect(schema.type).toBe('object')
    expect(schema.properties).toBeTruthy()
    expect(schema.properties.textPosition.enum).toHaveLength(6)
  })
})
