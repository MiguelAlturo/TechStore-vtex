import * as React from 'react'
import { useProduct } from 'vtex.product-context'

interface Props {
  name?: string
  backgroundColor?: string
  textColor?: string
}

const DiscountFlag: React.FC<Props> = ({
  name = 'Miguel Caballero',
  backgroundColor = '#4B1394',
  textColor = '#ffffff',
}) => {
  const productContext = useProduct()

  const item =
    productContext?.selectedItem ?? productContext?.product?.items?.[0]

  const seller = item?.sellers?.[0]
  const commertialOffer = seller?.commertialOffer

  const listPrice = commertialOffer?.ListPrice
  const price = commertialOffer?.Price

  if (!listPrice || !price || listPrice <= price) {
    return null
  }

  const discount = Math.round(((listPrice - price) / listPrice) * 100)

  return (
    <div
      className="discount-flag-container"
      style={{
        position: 'absolute',
        top: '8px',
        left: '8px',
        backgroundColor,
        color: textColor,
        padding: '6px 12px',
        borderRadius: '0 6px 6px 0',
        fontSize: '12px',
        fontWeight: 400,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'all 0.3s ease',
        transformOrigin: 'left center',
      }}
    >
      <span style={{ fontWeight: 400 }}>{name}</span>
      <span style={{ fontWeight: 700 }}>-{discount}%</span>
    </div>
  )
}

;(DiscountFlag as any).schema = {
  title: 'Discount Flag',
  type: 'object',
  properties: {
    name: {
      title: 'Nombre en etiqueta',
      type: 'string',
      default: 'Miguel Caballero',
    },
    backgroundColor: {
      title: 'Color de fondo',
      type: 'string',
      default: '#4B1394',
      widget: {
        'ui:widget': 'color',
      },
    },
    textColor: {
      title: 'Color del texto',
      type: 'string',
      default: '#ffffff',
      widget: {
        'ui:widget': 'color',
      },
    },
  },
}

export default DiscountFlag
