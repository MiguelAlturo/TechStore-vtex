import * as React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { useCountries } from './hooks/useCountries'
import './CountryCarousel.css'

const CSS_HANDLES = [
  'container',
  'header',
  'title',
  'subtitle',
  'grid',
  'card',
  'flag',
  'countryTitle',
  'countryName',
  'capital',
  'button',
  'modalOverlay',
  'modal',
  'modalTitle',
  'input',
  'status',
  'closeButton',
  'countrySelector',
  'countrySelectorLabel',
  'countrySelectorFlag',
  'countrySelectorName',
  'formRow',
  'skeletonGrid',
  'skeletonCard',
  'skeletonFlag',
  'skeletonTitle',
  'skeletonName',
  'skeletonCapital',
  'skeletonButton',
]

const CountryCarousel: React.FC = () => {
  const handles = useCssHandles(CSS_HANDLES) as any

  const {
    countries,
    loading,
    error,
    selectedCountry,
    setSelectedCountry,
    status,
    setStatus,
    submitLead,
  } = useCountries()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const selectedCountryData = countries.find(
    (c: any) => c.name.common === selectedCountry
  )

  if (loading) {
    return (
      <div className={`${handles.container} custom-carousel`}>
        <div className={handles.header}>
          <h2 className={handles.title}>Presencia Global</h2>
          <p className={handles.subtitle}>
            Encuentra nuestras tiendas en las principales ciudades del mundo
          </p>
        </div>
        <div className={`${handles.skeletonGrid} skeletonGrid`}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`${handles.skeletonCard} skeletonCard`}>
              <div className={`${handles.skeletonFlag} skeletonFlag`} />
              <div className={`${handles.skeletonTitle} skeletonTitle`} />
              <div className={`${handles.skeletonName} skeletonName`} />
              <div className={`${handles.skeletonCapital} skeletonCapital`} />
              <div className={`${handles.skeletonButton} skeletonButton`} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) return <p>Error cargando países</p>

  return (
    <div className={`${handles.container} custom-carousel`}>
      <div className={handles.header}>
        <h2 className={handles.title}>Presencia Global</h2>
        <p className={handles.subtitle}>
          Encuentra nuestras tiendas en las principales ciudades del mundo
        </p>
      </div>

      <div className={`${handles.grid} country-grid`}>
        {countries.slice(0, 4).map((country: any, index: number) => (
          <div
            key={index}
            className={`${handles.card} country-card`}
            onClick={() => setSelectedCountry(country.name.common)}
          >
            <img
              src={country.flags.svg}
              className={`${handles.flag} country-flag`}
              alt={country.name.common}
            />

            <h3 className={handles.countryName}>{country.name.common}</h3>

            <p className={handles.capital}>{country.capital?.[0]}</p>

            <button className={`${handles.button} country-button`}>
              Saber Más
            </button>
          </div>
        ))}
      </div>

      {selectedCountry && (
        <div
          className={handles.modalOverlay}
          onClick={() => {
            setSelectedCountry(null)
            setStatus('idle')
          }}
        >
          <div
            className={handles.modal}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button
              className={handles.closeButton}
              onClick={() => {
                setSelectedCountry(null)
                setStatus('idle')
              }}
            >
              ✕
            </button>

            <h2 className={handles.modalTitle}>Información de contacto</h2>

            <p style={{ marginBottom: '16px', color: '#6b7280' }}>
              Complete el formulario para recibir más información sobre nuestras
              operaciones en {selectedCountry}
            </p>

            <div className={handles.formRow}>
              <input
                className={handles.input}
                placeholder="Nombre completo"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />

              <input
                className={handles.input}
                placeholder="Correo electrónico"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />

              <div className={handles.countrySelector}>
                <span className={handles.countrySelectorLabel}>País</span>
                <div className={handles.countrySelectorFlag}>
                  {selectedCountryData && (
                    <img
                      src={selectedCountryData.flags.svg}
                      alt={selectedCountryData.name.common}
                    />
                  )}
                  <span className={handles.countrySelectorName}>
                    {selectedCountryData?.name.common}
                  </span>
                </div>
              </div>
            </div>

            <div className={handles.status}>
              {status === 'success' && '✅ Enviado correctamente'}
              {status === 'error' && '❌ Verifica los datos'}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                className={handles.button}
                onClick={() => submitLead(name, email)}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountryCarousel
