import { Status } from "@prisma/client"

export type TOrderDetails = {
    id: number
    code: string
    collaboratorId: number
    createdAt: Date
    updatedAt: Date
    description: string
    status: Status
    rating: number
    isEvaluated: boolean
    // products: {
    //   name: string
    //   value: number
    // }[]
    tax: number
    freight: number
    resident: {
        name: string
        adress: {
            street: string
            country: string
            neighborhood: string
            state: string
            zipCode: string
            number: number
        }
    }
    collaborator: {
        name: string
        email: string
        phone: string
    }
}