### ROUTE: get-collaborators
**Resultado Esperado:**
{
  id: number
  name: string
  countDeliveries: number
  mediaRating: number
  countRating: number
  operatingTimeInMonths: number
  tags: string
  languages: string
  local: string
  servicesProvided: string // Atualizar a API para isto ser um array
  active: boolean
  ratings: {
    id: number
    ratingNote: number
    recommendations: string
    orderId: number
    collaboratorId: number
  }[]
}[]

### ROUTE: get-orders
**Resultado Esperado:**
{
  id: number
  code: string
  createdAt: Date
  updatedAt: Date
  description: string
  status: 'EmRota' | 'Finalizado' | 'Avaliado'
  collaborator: {
    id: number
    name: string
  }
}[]

### ROUTE: get-collaborator-detail
**Resultado Esperado:**
{
  id: number
  name: string
  countDeliveries: number
  mediaRating: number
  countRating: number
  operatingTimeInMonths: number
  tags: string
  languages: string
  local: string
  servicesProvided: string
  active: boolean
  ratings: {
    id: number
    ratingNote: number
    recommendations: string
    orderId: number
    collaboratorId: number
  }[]
}

