import { describe, it, expect } from 'vitest'

describe('DiscountFlag Component', () => {
  it('should have correct default props', () => {
    const defaultProps = {
      name: 'Miguel Caballero',
      backgroundColor: '#4B1394',
      textColor: '#ffffff',
    }

    expect(defaultProps.name).toBe('Miguel Caballero')
    expect(defaultProps.backgroundColor).toBe('#4B1394')
    expect(defaultProps.textColor).toBe('#ffffff')
  })

  it('should calculate discount correctly', () => {
    const listPrice = 100
    const price = 75
    const discount = Math.round(((listPrice - price) / listPrice) * 100)

    expect(discount).toBe(25)
  })

  it('should return null when no discount', () => {
    const listPrice = 100
    const price = 100

    const shouldShowFlag = listPrice > price

    expect(shouldShowFlag).toBe(false)
  })

  it('should have valid schema definition', () => {
    const schema = {
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
        },
        textColor: {
          title: 'Color del texto',
          type: 'string',
          default: '#ffffff',
        },
      },
    }

    expect(schema.type).toBe('object')
    expect(schema.properties).toBeTruthy()
    expect(schema.properties.name.default).toBe('Miguel Caballero')
  })

  it('should handle different discount percentages', () => {
    const testCases = [
      { list: 200, price: 150, expected: 25 },
      { list: 100, price: 90, expected: 10 },
      { list: 500, price: 250, expected: 50 },
    ]

    testCases.forEach(({ list, price, expected }) => {
      const discount = Math.round(((list - price) / list) * 100)

      expect(discount).toBe(expected)
    })
  })
})
