import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'NodeJs',
      description: {
        en: "Création d'API.",
        id_ID: 'NodeJs.',
      },
      icon: 'devicon:nodejs',
      image: null,
    },
    {
      id: 2,
      title: 'Vue',
      description: {
        en: "J'utilise VueJS, un framework JavaScript et Typescript moderne.",
        id_ID: 'VueJs',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
    {
      id: 3,
      title: 'PC-Soft',
      description: {
        en: 'Windev, Windev Mobile et WebDev.',
        id_ID: 'PCSoft',
      },
      icon: 'devicon:windows8',
      image: null,
    },
    {
      id: 4,
      title: 'Python',
      description: {
        en: "Parfois j'utilise Python, SQL, Java/JavaScript, C#, etc. Mais Python est un language pratique pour mes petits projets.",
        id_ID: 'Python',
      },
      icon: 'devicon:python',
      image: null,
    },
  ]
})
