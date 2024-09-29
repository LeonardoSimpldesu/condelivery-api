import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    await prisma.order.create({
        data: {
            status: 'Em rota',
            codigo: '1450',
            morador: {
                create: { 
                    name: 'Elizabeth',
                    email: 'elizabetholiveira@prisma.io',
                    password: '12345678',
                    foto_path: '',
                    last_name: 'Oliveira',
                    cpf : '67893756341',
                    celular: '(11) 940393837',
                    apartment: { 
                        create: { 
                            number: '75', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    nome: 'Alyny Plaza',
                    countDeliveries: 17,
                    mediaRating: 0,
                    countRating: 10,
                    operatingTime: 2,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
                    thanksNotes: 'EXCELENTE! Me ajudou e muito! Recomendo!',
                    languages: 'Português',
                    local: 'São Paulo',
                    servicesProvided: 'Sorveteiro; Desenvolvedor;'
                },
            },
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Em rota',
            codigo: '1451',
            morador: {
                create: { 
                    name: 'Ana Beatriz Lisboa',
                    email: 'anabeatrizlisboa@prisma.io',
                    password: '12345678',
                    foto_path: '',
                    last_name: 'Lisboa',
                    cpf : '76593701235',
                    celular: '(11) 970702327',
                    apartment: { 
                        create: { 
                            number: '26', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    nome: 'Luciano Alves',
                    countDeliveries: 34,
                    mediaRating: 0,
                    countRating: 34,
                    operatingTime: 24,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
                    thanksNotes: 'EXCELENTE! Me ajudou e muito! Recomendo!',
                    languages: 'Português',
                    local: 'São Paulo',
                    servicesProvided: 'Manuntenção; Desenvolvedor;'
                },
            },
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Aguardando Finalização',
            codigo: '1730',
            morador: {
                create: { 
                    name: 'Kleber',
                    email: 'kleberlima@prisma.io',
                    password: '7777777',
                    foto_path: '',
                    last_name: 'Lima',
                    cpf : '40387623431',
                    celular: '(11) 993522897',
                    apartment: { 
                        create: { 
                            number: '7', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    nome: 'Rogerio Ceni',
                    countDeliveries: 50,
                    mediaRating: 0,
                    countRating: 45,
                    operatingTime: 2,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
                    thanksNotes: 'EXCELENTE! Me ajudou e muito! Recomendo!',
                    languages: 'Português',
                    local: 'São Paulo',
                    servicesProvided: 'Goleiro; Desenvolvedor;'
                },
            },
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Aguardando Finalização',
            codigo: '1731',
            morador: {
                create: { 
                    name: 'Augusto',
                    email: 'augustoryu@prisma.io',
                    password: '12345678',
                    foto_path: '',
                    last_name: 'Ryu',
                    cpf : '26789367325',
                    celular: '(11) 998673459',
                    apartment: { 
                        create: { 
                            number: '31', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    nome: 'Marcelo Oliveira',
                    countDeliveries: 68,
                    mediaRating: 0,
                    countRating: 66,
                    operatingTime: 20,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
                    thanksNotes: 'EXCELENTE! Me ajudou e muito! Recomendo!',
                    languages: 'Português',
                    local: 'São Paulo',
                    servicesProvided: 'Mecânico; Desenvolvedor;'
                },
            },
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Finalizado',
            codigo: '2090',
            morador: {
                create: { 
                    name: 'João Tranquilo',
                    email: 'joaotranquilo@prisma.io',
                    password: '12345678',
                    foto_path: '',
                    last_name: 'Tranquilino',
                    cpf : '57890345687',
                    celular: '(11) 924236908',
                    apartment: { 
                        create: { 
                            number: '106', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    nome: 'Lucas Gomes',
                    countDeliveries: 25,
                    mediaRating: 0,
                    countRating: 24,
                    operatingTime: 30,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
                    thanksNotes: 'EXCELENTE! Me ajudou e muito! Recomendo!',
                    languages: 'Português',
                    local: 'São Paulo',
                    servicesProvided: 'Sorveteiro; Desenvolvedor;'
                },
            },
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
        },
    })

    await prisma.order.create({
        data: {
            status: 'Finalizado',
            codigo: '2091',
            morador: {
                create: { 
                    name: 'Leonardo De',
                    email: 'leonardodesouza@prisma.io',
                    password: '12345678',
                    foto_path: '',
                    last_name: 'Souza',
                    cpf : '12367895634',
                    celular: '(11) 935899756',
                    apartment: { 
                        create: { 
                            number: '90', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    nome: 'Ricardo Melquior',
                    countDeliveries: 17,
                    mediaRating: 0,
                    countRating: 10,
                    operatingTime: 2,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
                    thanksNotes: 'EXCELENTE! Me ajudou e muito! Recomendo!',
                    languages: 'Português',
                    local: 'São Paulo',
                    servicesProvided: 'Sorveteiro; Desenvolvedor;'
                },
            },
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro'
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