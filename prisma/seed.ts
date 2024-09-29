import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    // =================================================================================
    // User's Seed
    // =================================================================================
    const userTest = await prisma.user.create({
        data: {
            name: 'Leonardo',
            email: 'leoanrdo@prisma.io',
            password: '123456',
        },
    })
    // =================================================================================
    // End User's Seed 
    // =================================================================================

    // =================================================================================
    // Order's Seed 
    // =================================================================================
    await prisma.order.create({
        data: {
            status: 'Em rota',
            codigo: 'Pedido #1450',
            morador: 'Nunti Teressa',
            colaborador: 'A colaborar',
            created_at: '29-09-2024'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Em rota',
            codigo: 'Pedido #1451',
            morador: 'Nunti Teressa',
            colaborador: 'A colaborar',
            created_at: '29-09-2024'
        },
    })
    // =================================================================================
    // End Order's Seed 
    // =================================================================================
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })