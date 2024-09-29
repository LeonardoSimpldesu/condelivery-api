import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    await prisma.order.create({
        data: {
            status: 'Em rota',
            code: '1450',
            created_at: '29-09-2024',
            description: 'Ifood - Restaurante Sabor Caseiro',

            // Relationships Instances
            resident: {
                create: { 
                    name: 'Elizabeth',
                    email: 'elizabetholiveira@prisma.io',
                    password: '12345678',
                    photo_path: '',
                    last_name: 'Oliveira',
                    cpf : '67893756341',
                    cell: '(11) 940393837',
                    apartment: { 
                        create: { 
                            number: '75', 
                        }
                    }
                }, 
                
            },
            collaborator: {
                create: {
                    name: 'Alyny Plaza',
                    countDeliveries: 17,
                    mediaRating: 0,
                    countRating: 10,
                    operatingTimeInMonths: 2,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
                    languages: 'Português',
                    local: 'São Paulo',
                    servicesProvided: 'Sorveteiro; Desenvolvedor;',
                },
            },

            // Como mocar o rating aqui no seed? 
            
        },
    })

    await prisma.order.create({
        data: {
            status: 'Em rota',
            code: '1451',
            resident: {
                create: { 
                    name: 'Ana Beatriz Lisboa',
                    email: 'anabeatrizlisboa@prisma.io',
                    password: '12345678',
                    photo_path: '',
                    last_name: 'Lisboa',
                    cpf : '76593701235',
                    cell: '(11) 970702327',
                    apartment: { 
                        create: { 
                            number: '26', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    name: 'Luciano Alves',
                    countDeliveries: 34,
                    mediaRating: 0,
                    countRating: 34,
                    operatingTimeInMonths: 24,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
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
            code: '1730',
            resident: {
                create: { 
                    name: 'Kleber',
                    email: 'kleberlima@prisma.io',
                    password: '7777777',
                    photo_path: '',
                    last_name: 'Lima',
                    cpf : '40387623431',
                    cell: '(11) 993522897',
                    apartment: { 
                        create: { 
                            number: '7', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    name: 'Rogerio Ceni',
                    countDeliveries: 50,
                    mediaRating: 0,
                    countRating: 45,
                    operatingTimeInMonths: 2,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
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
            code: '1731',
            resident: {
                create: { 
                    name: 'Augusto',
                    email: 'augustoryu@prisma.io',
                    password: '12345678',
                    photo_path: '',
                    last_name: 'Ryu',
                    cpf : '26789367325',
                    cell: '(11) 998673459',
                    apartment: { 
                        create: { 
                            number: '31', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    name: 'Marcelo Oliveira',
                    countDeliveries: 68,
                    mediaRating: 0,
                    countRating: 66,
                    operatingTimeInMonths: 20,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
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
            code: '2090',
            resident: {
                create: { 
                    name: 'João Tranquilo',
                    email: 'joaotranquilo@prisma.io',
                    password: '12345678',
                    photo_path: '',
                    last_name: 'Tranquilino',
                    cpf : '57890345687',
                    cell: '(11) 924236908',
                    apartment: { 
                        create: { 
                            number: '106', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    name: 'Lucas Gomes',
                    countDeliveries: 25,
                    mediaRating: 0,
                    countRating: 24,
                    operatingTimeInMonths: 30,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
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
            code: '2091',
            resident: {
                create: { 
                    name: 'Leonardo De',
                    email: 'leonardodesouza@prisma.io',
                    password: '12345678',
                    photo_path: '',
                    last_name: 'Souza',
                    cpf : '12367895634',
                    cell: '(11) 935899756',
                    apartment: { 
                        create: { 
                            number: '90', 
                        }
                    }
                }
            },
            collaborator: {
                create: {
                    name: 'Ricardo Melquior',
                    countDeliveries: 17,
                    mediaRating: 0,
                    countRating: 10,
                    operatingTimeInMonths: 2,
                    tags: 'Esforçado; Pontual; Simpático; Ótimo papo;',
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