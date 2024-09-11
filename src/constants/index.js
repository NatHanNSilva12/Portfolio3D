export const navLinks = [
  {
    id: 1,
    name: 'Inicio',
    href: '#home',
  },
  {
    id: 2,
    name: 'Sobre',
    href: '#about',
  },
  {
    id: 3,
    name: 'Trabalho',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contato',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Rosebud 3D',
    desc: 'Ecommerce de impressões 3d e modelos',
    subdesc:
      'Criado com o intuito de ser uma loja virtual para compradores e vendedores de impressões/modelos 3D, utilizando do modelo de vendas B2B',
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/react.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/js.png',
      },
      {
        id: 4,
        name: 'NodeJS',
        path: '/assets/node.png',
      },
      {
        id: 5,
        name: 'ThreeJS',
        path: '/assets/Threejs-logo.png',
      },
    ],
  },
  {
    title: 'Controle Financeiro',
    desc: 'Sistema de controle financeiro em React',
    subdesc:
      'Feito com o intuito de aprender os sistemas basicos do React e sanar a necessidade de um sistema de finanças para uma rotina corrida, este sistema armazena dados e faz calculos de valores recebidos ou gastos',
    href: 'https://controle-financeiro-black.vercel.app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/react.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/js.png',
      },
    ],
  },
  {
    title: 'Site de musica',
    desc: 'Landing Page criada para um cliente',
    subdesc:
      'A ideia principal do site é ser uma aplicação onde musicos podem se reunir para assistirem aulas, agendarem shows, comprarem cursos e etc, projeto de Tcc de um amigo',
    href: 'https://site-musica-zugs.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/html.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
    ],
  },
  {
    title: 'Worktale',
    desc: 'Um jogo sobre o mercado de trabalho',
    subdesc:
      'Criado em GML, Worktale foi um projeto originado na competição "Hackathon" de 2023 por mim e meu amigo Leonardo Torres, com o intuito de divertir e mostrar como o mercado de trabalho pode ser duro as vezes',
    href: 'https://gamer0097br.itch.io/worktale',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/gamepad.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [

    ],
  },
  {
    title: 'OutRun Clone',
    desc: 'Um clone do clássico game de snes',
    subdesc:
      'Feito com o intuito de entreter e treinar minhas habilidades em javascript',
    href: 'https://topgear-html-clone.netlify.app',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/gamepad.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/js.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Desenvolvedor Web',
    pos: 'Desenvolvedor Web FullStack',
    duration: '2024 - Presente',
    title: "Desenvolvi sites de ecommerce, blogs e aplicações para armazenamento de dados na nuvem, além de sistemas de chat e modelos 3D",
    icon: '/assets/react.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Freelancer',
    pos: 'Desenvolvedor e Designer',
    duration: '2023 - 2024',
    title: "Desenvolvi diversas Landing Pages, designes de logotipos e artes promocionais para redes sociais",
    icon: '/assets/figma.svg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'HTML',
    pos: 'Desenvolvedor Web Frontend',
    duration: '2022 - 2023',
    title: "A partir da metade do meu curso eu comecei a buscar por oportunidades e fazer pequenos projetos frontend em Html, Css e Javascript até adentrar o React",
    icon: '/assets/html.svg',
    animation: 'clapping',
  },
];
