const API_URL = 'https://web-service-pivoting-production.up.railway.app/api/pivoting'

export const parcial = async (data: any) => {
  const response = await fetch(`${API_URL}/parcial`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.json()
}

export const escalonado = async (data: any) => {
  const response = await fetch(`${API_URL}/staggered`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.json()
}
