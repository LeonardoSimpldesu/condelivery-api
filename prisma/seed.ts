import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    await prisma.condominium.create({
        data: {
            name: "Residência Das Flores",
            policies: {
                create: [
                    {
                        title: 'Horário de Entregas',
                        description: 'Das 8h às 22h'
                    },
                    {
                        title: 'Acesso de Entregadores',
                        description: 'Somente com autorização prévia'
                    },
                    {
                        title: 'Uso do Elevador de Serviço',
                        description: 'Obrigatório para todas as entregas'
                    },

                ]
            },
            blocks: {
                create: [
                    {
                        name: "Bloco A",
                        apartments: {
                            create: [
                                {
                                    number: "70",
                                    residents: {
                                        create: [{
                                            name: 'Elizabeth',
                                            email: 'elizabetholiveira@prisma.io',
                                            password: '12345678',
                                            photo_path: '',
                                            last_name: 'Oliveira',
                                            cpf: '67893756341',
                                            cell: '(11) 940393837',
                                            order: {
                                                create: [
                                                    {
                                                        status: 'Em rota',
                                                        code: '1450',
                                                        created_at: '29-09-2024',
                                                        description: 'Ifood - Restaurante Sabor Caseiro',
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
                                                                active: true
                                                            },
                                                        },
                                                    }]
                                            }
                                        }]
                                    },
                                },
                                {
                                    number: "71",
                                    residents: {
                                        create: [{
                                            name: 'Ana Beatriz Lisboa',
                                            email: 'anabeatrizlisboa@prisma.io',
                                            password: '12345678',
                                            photo_path: '',
                                            last_name: 'Lisboa',
                                            cpf: '76593701235',
                                            cell: '(11) 970702327',
                                            order: {
                                                create: [
                                                    {
                                                        status: 'Em rota',
                                                        code: '1451',
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
                                                                servicesProvided: 'Manuntenção; Desenvolvedor;',
                                                                active: true
                                                            },
                                                        },
                                                        created_at: '29-09-2024',
                                                        description: 'Ifood - Restaurante Sabor Caseiro'
                                                    }
                                                ]
                                            }
                                        }]
                                    },
                                }
                            ]
                        }
                    },
                    {
                        name: "Bloco B",
                        apartments: {
                            create: [
                                {
                                    number: "80",
                                    residents: {
                                        create: [{
                                            name: 'Kleber',
                                            email: 'kleberlima@prisma.io',
                                            password: '7777777',
                                            photo_path: '',
                                            last_name: 'Lima',
                                            cpf: '40387623431',
                                            cell: '(11) 993522897',
                                            order: {
                                                create: [
                                                    {
                                                        status: 'Avaliado',
                                                        code: '1731',
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
                                                                servicesProvided: 'Mecânico; Desenvolvedor;',
                                                                active: true
                                                            },
                                                        },
                                                        created_at: '29-09-2024',
                                                        description: 'Ifood - Restaurante Sabor Caseiro', 
                                                        rating: { 
                                                            create: { 
                                                                recommendations: "O cara sabe fazer uma entrega na porta!", 
                                                                ratingNote: 5, 
                                                                collaboratorId: 3 // Marcelo Oliveira
                                                            }
                                                        }
                                                    },
                                                  
                                                ]
                                            }
                                        }]
                                    },

                                },
                                {
                                    number: "81",
                                    residents: {
                                        create: [{
                                            name: 'Augusto',
                                            email: 'augustoryu@prisma.io',
                                            password: '12345678',
                                            photo_path: '',
                                            last_name: 'Ryu',
                                            cpf: '26789367325',
                                            cell: '(11) 998673459',
                                            order: {
                                                create: [
                                                    {
                                                        status: 'Avaliado',
                                                        code: '1730',
                                                        collaboratorId: 3,
                                                        created_at: '29-09-2024',
                                                        description: 'Ifood - Restaurante Sabor Caseiro',
                                                        rating: { 
                                                            create: { 
                                                                recommendations: "Arigato!", 
                                                                ratingNote: 3, 
                                                                collaboratorId: 3 // Rogerio Ceni 
                                                            }
                                                        }
                                                    },
                                                    {
                                                        status: 'Avaliado',
                                                        code: '1867',
                                                        collaboratorId: 3,
                                                        created_at: '29-09-2024',
                                                        description: 'Ifood - Restaurante Sabor Caseiro', 
                                                        rating: { 
                                                            create: { 
                                                                recommendations: "Deixou o pedido no chãoo", 
                                                                ratingNote: 3, 
                                                                collaboratorId: 3 // Marcelo Oliveira
                                                            }
                                                        }
                                                    },
                                                ]
                                            }
                                        }]
                                    },
                                }
                            ]
                        }
                    },
                    {
                        name: "Bloco C",
                        apartments: {
                            create: [
                                {
                                    number: "90",
                                    residents: {
                                        create: [{
                                            name: 'João Tranquilo',
                                            email: 'joaotranquilo@prisma.io',
                                            password: '12345678',
                                            photo_path: '',
                                            last_name: 'Tranquilino',
                                            cpf: '57890345687',
                                            cell: '(11) 924236908',
                                            order: {
                                                create: [
                                                    {
                                                        status: 'Finalizado',
                                                        code: '2090',
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
                                                                servicesProvided: 'Sorveteiro; Desenvolvedor;',
                                                                active: true
                                                            },
                                                        },
                                                        created_at: '29-09-2024',
                                                        description: 'Ifood - Restaurante Sabor Caseiro'
                                                    }
                                                ]
                                            }
                                        }]
                                    },
                                },
                                {
                                    number: "91",
                                    residents: {
                                        create: [{
                                            name: 'Leonardo De',
                                            email: 'leonardodesouza@prisma.io',
                                            password: '12345678',
                                            photo_path: '',
                                            last_name: 'Souza',
                                            cpf: '12367895634',
                                            cell: '(11) 935899756',
                                            order: {
                                                create: [
                                                    {
                                                        status: 'Finalizado',
                                                        code: '2091',
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
                                                                servicesProvided: 'Sorveteiro; Desenvolvedor;',
                                                                active: true
                                                            },
                                                        },
                                                        created_at: '29-09-2024',
                                                        description: 'Ifood - Restaurante Sabor Caseiro'
                                                    }
                                                ]
                                            }
                                        }]
                                    },
                                }
                            ]
                        }
                    }
                ]
            },
        }
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