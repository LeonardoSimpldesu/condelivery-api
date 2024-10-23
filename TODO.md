### Transformar ServiceProvided em array
### Retornar o objeto colaborator em get-orders 

### Service Provider eu vou fazer um split no próprio controller. 

### ROUTE: get-collaborators
**Resultado Esperado:**
{
  id: number (x)
  name: string (x)
  countDeliveries: number (x)
  mediaRating: number (x)
  countRating: number (x)
  operatingTimeInMonths: number (x)
  tags: string (x)
  languages: string (x)
  local: string (x)
  servicesProvided: string // Atualizar a API para isto ser um array
  active: boolean (x)
  ratings: {
    id: number (x)
    ratingNote: number (x)
    recommendations: string (x)
    orderId: number (x)
    collaboratorId: number (x)
  }[]
}[]

### ROUTE: get-orders (x)
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
  } -- Falta apenas retornar o objeto. 
}[]

### ROUTE: get-collaborator-detail (x)
**Resultado Esperado:**
{
  id: number (x)
  name: string (x)
  countDeliveries: number (x)
  mediaRating: number (x)
  countRating: number (x)
  operatingTimeInMonths: number (x)
  tags: string (x)
  languages: string (x)
  local: string (x)
  servicesProvided: string (x)
  active: boolean (x)
  ratings: {
    id: number
    ratingNote: number
    recommendations: string
    orderId: number
    collaboratorId: number
  }[]
}

