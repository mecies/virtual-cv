import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';
import {
  angularJs,
  apolloGraphql,
  cypress,
  django,
  eslint,
  firebase,
  graphql,
  javascript,
  jest,
  lerna,
  materialUi,
  nextJs,
  nodeJs,
  npm,
  nuxtJs,
  playwright,
  prettier,
  react,
  reactQuery,
  redux,
  sass,
  storyblok,
  storybook,
  styledComponents,
  svelte,
  tailwindCss,
  typescript,
  vue,
  webRtc,
  webSockets,
  yarn,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior Frontend Developer & Tech Lead',
      company: 'Swapcard',
      image: import('@/assets/logos/swapcard.jpg'),
      dates: [new Date('2021-07'), null],
      description: `
        - Developing and maintaining an all-in-one platform for creating virtual events.
        - Developing and maintaining a design system for the company.
        - Developing a professional live streaming studio application from scratch.
        - Introducing frontend-centric e2e tests, preventing regression in SEO, a11y, and SSR.
        - Leading a team of 4 developers.
        - Mentoring and coaching junior developers.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          styledComponents(),
          storybook(),
          apolloGraphql(),
          graphql(),
          webSockets(),
          webRtc(),
          jest(),
          cypress(),
          playwright(),
          eslint(),
          prettier(),
          nodeJs(),
          yarn(),
          lerna(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/swapcard/' }),
        website({
          url: 'https://www.swapcard.com/',
        }),
      ],
    },
    {
      role: 'Senior Frontend Developer',
      company: 'Xfive · Part-time',
      image: import('@/assets/logos/xfive.png'),
      dates: [new Date('2022-05'), null],
      description: `
        - Developing a platform that eases the process of translating ancient buddhist texts.
        - Working closely with the client to deliver a tailor-made solution to their domain needs.
        - Leading a team of 2 frontend developers.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          reactQuery(),
          typescript(),
          styledComponents(),
          sass(),
          jest(),
          eslint(),
          prettier(),
          nodeJs(),
          yarn(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/xfiveco/' }),
        website({
          url: 'https://www.xfive.co/',
        }),
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Infermedica',
      image: import('@/assets/logos/infermedica.jpeg'),
      dates: [new Date('2020-10'), new Date('2021-07')],
      description: `
        - Developing an AI-powered medical diagnosis platform for doctors and patients.
        - Developing and maintaining a design system for the company.
        - Maintaining a legacy medical application and delivering it to the clients.
        - Maintaining an existing static marketing website and creating a new one with CMS.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          vue(),
          nuxtJs(),
          svelte(),
          angularJs(),
          django(),
          typescript(),
          javascript(),
          sass(),
          storybook(),
          storyblok(),
          jest(),
          eslint(),
          prettier(),
          npm(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/infermedica/' }),
        website({
          url: 'https://infermedica.com/',
        }),
        github({
          url: 'https://github.com/infermedica',
        }),
      ],
    },
    {
      role: 'Junior Frontend Developer',
      company: 'Monterail',
      image: import('@/assets/logos/monterail.jpg'),
      dates: [new Date('2020-02'), new Date('2020-10')],
      description: `
        - Developing a journey planner and online booking platform for European travel.
        - Developing an online pharmacy platform for the US market.
        - Developing an internal e-learning platform for the company.
        - Developing an internal employee growth framework platform for the company.
        - Working in multiple teams of 1-5 frontend developers on multiple projects.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          vue(),
          react(),
          nextJs(),
          nuxtJs(),
          redux(),
          typescript(),
          sass(),
          styledComponents(),
          tailwindCss(),
          materialUi(),
          jest(),
          eslint(),
          prettier(),
          nodeJs(),
          npm(),
          yarn(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/monterail/' }),
        website({
          url: 'https://monterail.com/',
        }),
      ],
    },
    {
      role: 'Frontend Developer Intern',
      company: 'flashPub',
      image: import('@/assets/logos/flashpub.png'),
      dates: [new Date('2019-11'), new Date('2020-02')],
      description: `
        - Developing a platform for creating and managing scientific micro publications.
        - Working closely with the CEO and CTO of a startup.
        - Working in a team of 2 frontend developers.
        - Learning the basics of frontend development.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          typescript(),
          redux(),
          materialUi(),
          styledComponents(),
          eslint(),
          prettier(),
          nodeJs(),
          firebase(),
          npm(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/flashpub-io/' }),
        website({
          url: 'https://flashpub.io/',
        }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
