const API_URL = 'https://web-service-pivoting-production.up.railway.app/api/pivoting'
export type API_PATHS = 'parcial' | 'staggered'

export const resolveSystem = async (data: any, path: API_PATHS) => {
  const response = await fetch(`${API_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.json()
}
