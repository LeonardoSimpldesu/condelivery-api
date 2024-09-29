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
            morador: 'Nunti Teréssa',
            colaborador: 'A colaborar',
            created_at: '29-09-2024', 
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Em rota',
            codigo: 'Pedido #1451',
            morador: 'Takamassa Nomuro',
            colaborador: 'A colaborar',
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Aguardando Finalização',
            codigo: 'Pedido #1730',
            morador: 'Amim Avara',
            colaborador: 'A colaborar',
            created_at: '29-09-2024', 
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Aguardando Finalização',
            codigo: 'Pedido #1731',
            morador: 'Power Guido',
            colaborador: 'A colaborar',
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Finalizado',
            codigo: 'Pedido #2090',
            morador: 'Isadora Pinto',
            colaborador: 'A colaborar',
            created_at: '29-09-2024', 
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Finalizado',
            codigo: 'Pedido #2091',
            morador: 'Jalin Rabey',
            colaborador: 'A colaborar',
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
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