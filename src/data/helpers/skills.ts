import createSkillFactory from '@/data/_internals/create-skill-factory';

/*
Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.
Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts
Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.
*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  icon: 'logos:astro',
  name: 'Astro',
  url: 'https://astro.build/',
});

export const storyblok = createSkillFactory({
  icon: 'simple-icons:storyblok',
  iconColor: '#00B3B0',
  name: 'Storyblok',
  url: 'https://www.storyblok.com/',
});

export const angularJs = createSkillFactory({
  icon: 'simple-icons:angularjs',
  iconColor: '#DD0031',
  name: 'AngularJS',
  url: 'https://angularjs.org/',
});

export const django = createSkillFactory({
  icon: 'simple-icons:django',
  iconColor: '#092E20',
  name: 'Django',
  url: 'https://www.djangoproject.com/',
});

export const chakraUi = createSkillFactory({
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  name: 'Chakra UI',
  url: 'https://chakra-ui.com/',
});

export const eslint = createSkillFactory({
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  name: 'ESLint',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  icon: 'logos:jest',
  name: 'Jest',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  name: 'MongoDB',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  name: 'NestJS',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  icon: 'logos:nextjs-icon',
  name: 'Next.js',
  url: 'https://nextjs.org/',
});

export const nuxtJs = createSkillFactory({
  icon: 'logos:nuxt-icon',
  name: 'Nuxt.js',
  url: 'https://nuxt.com/',
});

export const postgreSql = createSkillFactory({
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  name: 'PostgreSQL',
  url: 'https://www.postgresql.org/',
});

export const html = createSkillFactory({
  icon: 'logos:html-5',
  name: 'HTML5',
  url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
});

export const ruby = createSkillFactory({
  icon: 'logos:ruby',
  name: 'Ruby',
  url: 'https://www.ruby-lang.org/en/',
});

export const rails = createSkillFactory({
  icon: 'logos:rails',
  name: 'Ruby on Rails',
  url: 'https://rubyonrails.org/',
});

export const css = createSkillFactory({
  icon: 'logos:css-3',
  name: 'CSS3',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const prettier = createSkillFactory({
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  name: 'Prettier',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  icon: 'logos:react',
  iconColor: '#61DAFB',
  name: 'React.js',
  url: 'https://reactjs.org/',
});

export const gatsby = createSkillFactory({
  icon: 'logos:gatsby',
  iconColor: '',
  name: 'Gatsby.js',
  url: 'https://www.gatsbyjs.com/',
});

export const svelte = createSkillFactory({
  icon: 'logos:svelte-icon',
  iconColor: '#ff4700',
  name: 'Svelte',
  url: 'https://svelte.dev/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'logos:react-query-icon',
  url: 'https://tanstack.com/query',
});

export const tailwindCss = createSkillFactory({
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  name: 'Tailwind CSS',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  name: 'TypeScript',
  url: 'https://www.typescriptlang.org/',
});

export const javascript = createSkillFactory({
  icon: 'logos:javascript',
  name: 'JavaScript ES6',
  url: 'https://www.javascript.com/',
});

export const storybook = createSkillFactory({
  icon: 'logos:storybook-icon',
  iconColor: '#FF4785',
  name: 'Storybook',
  url: 'https://storybook.js.org/',
});

export const redux = createSkillFactory({
  icon: 'logos:redux',
  name: 'Redux',
  url: 'https://redux.js.org/',
});

export const styledComponents = createSkillFactory({
  icon: 'simple-icons:styledcomponents',
  iconColor: '#DB7093',
  name: 'Styled Components',
  url: 'https://styled-components.com/',
});

export const prisma = createSkillFactory({
  icon: 'logos:prisma',
  name: 'Prisma',
  url: 'https://www.prisma.io/',
});

export const socketio = createSkillFactory({
  icon: 'logos:socket-io',
  name: 'Socket.io',
  url: 'https://socket.io/',
});

export const webSockets = createSkillFactory({
  icon: 'logos:websocket',
  name: 'WebSockets',
  url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
});

export const webRtc = createSkillFactory({
  icon: 'logos:webrtc',
  name: 'WebRTC',
  url: 'https://webrtc.org/',
});

export const materialUi = createSkillFactory({
  icon: 'logos:material-ui',
  name: 'Material UI',
  url: 'https://material-ui.com/',
});

export const i18next = createSkillFactory({
  icon: 'simple-icons:i18next',
  iconColor: '#26A69A',
  name: 'i18next',
  url: 'https://www.i18next.com/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'logos:cypress-icon',
  // iconColor: '#',
  url: 'https://www.cypress.io/',
});

export const playwright = createSkillFactory({
  name: 'Playwright',
  icon: 'logos:playwright',
  url: 'https://playwright.dev/',
});

export const yarn = createSkillFactory({
  name: 'Yarn',
  icon: 'logos:yarn',
  url: 'https://yarnpkg.com/',
});

export const npm = createSkillFactory({
  name: 'npm',
  icon: 'logos:npm-icon',
  url: 'https://www.npmjs.com/',
});

export const nodeJs = createSkillFactory({
  name: 'Node.js',
  icon: 'logos:nodejs-icon',
  url: 'https://nodejs.org/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'logos:docker-icon',
  url: 'https://www.docker.com/',
});

export const graphql = createSkillFactory({
  name: 'GraphQL',
  icon: 'logos:graphql',
  url: 'https://graphql.org/',
});

export const turbo = createSkillFactory({
  icon: 'logos:turborepo-icon',
  name: 'Turbo',
  url: 'https://turbo.build/',
});

export const lerna = createSkillFactory({
  name: 'Lerna',
  icon: 'simple-icons:lerna',
  iconColor: 'white',
  url: 'https://lerna.js.org/',
});
