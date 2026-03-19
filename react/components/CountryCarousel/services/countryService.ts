export const getCountries = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/subregion/South%20America?fields=name,capital,flags'
    )

    if (!response.ok) {
      throw new Error('Error fetching countries')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

export const saveLead = async (data: {
  name: string
  email: string
  country: string | null
}) => {
  try {
    const response = await fetch('/api/dataentities/CL/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Error saving data')
    }

    return true
  } catch (error) {
    throw error
  }
}
