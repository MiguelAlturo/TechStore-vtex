import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

type TextPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

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
  'bannerHero__skeleton',
  'bannerHero__skeletonImage',
  'bannerHero__skeletonTitle',
  'bannerHero__skeletonSubtitle',
]

interface BannerHeroProps {
  imageUrl?: string
  headline?: string
  subhead?: string
  textPosition?: TextPosition
  textColor?: string
  blockClass?: string
  isLoading?: boolean
}

const BannerHero: React.FC<BannerHeroProps> = ({
  imageUrl = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
  headline = 'Tecnología del Futuro',
  subhead = 'Descubre las últimas innovaciones en electrónica y gadgets',
  textPosition = 'bottom-left',
  textColor = '#FFFFFF',
  blockClass = '',
  isLoading = false,
}) => {
  const handles = useCssHandles(CSS_HANDLES, { blockClass })

  const getPositionClass = (): string => {
    const positions: Record<TextPosition, string> = {
      'top-left': handles['bannerHero--topLeft'],
      'top-center': handles['bannerHero--topCenter'],
      'top-right': handles['bannerHero--topRight'],
      'bottom-left': handles['bannerHero--bottomLeft'],
      'bottom-center': handles['bannerHero--bottomCenter'],
      'bottom-right': handles['bannerHero--bottomRight'],
    }

    return positions[textPosition] || handles['bannerHero--bottomLeft']
  }

  const getContentStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      zIndex: 2,
      color: textColor,
      padding: '40px',
      maxWidth: '600px',
    }

    switch (textPosition) {
      case 'top-left':
        return { ...baseStyle, top: '40px', left: '40px', textAlign: 'left' }

      case 'top-center':
        return {
          ...baseStyle,
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }

      case 'top-right':
        return { ...baseStyle, top: '40px', right: '40px', textAlign: 'right' }

      case 'bottom-left':
        return { ...baseStyle, bottom: '40px', left: '40px', textAlign: 'left' }

      case 'bottom-center':
        return {
          ...baseStyle,
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }

      case 'bottom-right':
        return {
          ...baseStyle,
          bottom: '40px',
          right: '40px',
          textAlign: 'right',
        }

      default:
        return { ...baseStyle, bottom: '40px', left: '40px', textAlign: 'left' }
    }
  }

  if (isLoading) {
    return (
      <div
        className={handles.bannerHero__skeleton}
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          overflow: 'hidden',
          backgroundColor: '#e5e7eb',
        }}
      >
        <div
          className={handles.bannerHero__skeletonImage}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div
            className={handles.bannerHero__skeletonTitle}
            style={{
              width: '300px',
              height: '40px',
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '8px',
            }}
          />
          <div
            className={handles.bannerHero__skeletonSubtitle}
            style={{
              width: '200px',
              height: '24px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '6px',
            }}
          />
        </div>
        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div
      className={handles.bannerHero__container}
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
      }}
    >
      <img
        src={imageUrl}
        alt={headline}
        className={handles.bannerHero__image}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        className={handles.bannerHero__overlay}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      />
      <div
        className={`${handles.bannerHero__content} ${getPositionClass()}`}
        style={getContentStyle()}
      >
        <h1
          className={handles.bannerHero__title}
          style={{
            margin: 0,
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.2,
            textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          {headline}
        </h1>
        {subhead && (
          <p
            className={handles.bannerHero__subtitle}
            style={{
              margin: '12px 0 0',
              fontSize: 'clamp(16px, 2vw, 22px)',
              opacity: 0.95,
            }}
          >
            {subhead}
          </p>
        )}
      </div>
    </div>
  )
}

;(BannerHero as any).schema = {
  title: 'Banner Hero',
  description:
    'Banner de ancho completo con imagen de fondo y texto superpuesto',
  type: 'object',
  properties: {
    imageUrl: {
      title: 'Imagen de fondo',
      description: 'URL de la imagen que se mostrará como fondo del banner',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    headline: {
      title: 'Título',
      description: 'Texto del título principal que aparece sobre la imagen',
      type: 'string',
      default: 'Tecnología del Futuro',
    },
    subhead: {
      title: 'Subtítulo',
      description: 'Texto descriptivo que aparece debajo del título',
      type: 'string',
      default: 'Descubre las últimas innovaciones en electrónica y gadgets',
    },
    textPosition: {
      title: 'Posición del texto',
      description: 'Selecciona dónde se ubicará el texto sobre la imagen',
      type: 'string',
      enum: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      enumNames: [
        'Arriba izquierda',
        'Arriba centro',
        'Arriba derecha',
        'Abajo izquierda',
        'Abajo centro',
        'Abajo derecha',
      ],
      default: 'bottom-left',
    },
    textColor: {
      title: 'Color del texto',
      description: 'Color del título y subtítulo (formato hexadecimal)',
      type: 'string',
      default: '#FFFFFF',
      widget: {
        'ui:widget': 'color',
      },
    },
  },
}

export default BannerHero
