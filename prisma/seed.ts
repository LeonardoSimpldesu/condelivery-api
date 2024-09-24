import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const userTest = await prisma.user.create({
        data: {
            name: 'Leonardo',
            email: 'leoanrdo@prisma.io',
            password: '123456',
        },
    })
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