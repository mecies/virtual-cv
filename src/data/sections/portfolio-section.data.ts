import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, website } from '../helpers/links';
import {
  angularJs,
  apolloGraphql,
  css,
  cypress,
  django,
  eslint,
  gatsby,
  graphql,
  html,
  javascript,
  jest,
  lerna,
  materialUi,
  nextJs,
  nodeJs,
  playwright,
  postgreSql,
  prettier,
  rails,
  react,
  reactQuery,
  ruby,
  sass,
  storybook,
  styledComponents,
  tailwindCss,
  typescript,
  vue,
  webRtc,
  webSockets,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Backstage app',
      image: import('@/assets/portfolio/backstage.png'),
      dates: [new Date('2022-07'), null],
      details: [
        { label: 'Team size', value: '4 developers' },
        { label: 'My role', value: ['Tech lead', 'Senior Frontend Developer'] },
        { label: 'Company', value: 'Swapcard' },
        { label: 'Category', value: ['Web app', 'Commercial'] },
      ],
      pdfDetails: [
        {
          label: 'Article',
          value: 'https://release.swapcard.com/introducing-speaker-backstage-3yviJa',
          url: 'https://release.swapcard.com/introducing-speaker-backstage-3yviJa',
        },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/backstage-moderator.png'), alt: 'Moderator view screenshot' },
        { src: import('@/assets/portfolio/backstage-speaker.png'), alt: 'Speaker view screenshot' },
      ],
      description: 'Real-time live streaming studio web app',
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          styledComponents(),
          storybook(),
          jest(),
          apolloGraphql(),
          webSockets(),
          webRtc(),
          graphql(),
          eslint(),
          prettier(),
        ],
      },
      links: [
        website({
          url: 'https://release.swapcard.com/introducing-speaker-backstage-3yviJa',
        }),
      ],
    },
    {
      name: 'OPLU',
      image: import('@/assets/portfolio/oplu-logo.png'),
      dates: [new Date('2022-05'), new Date('2023-03')],
      details: [
        { label: 'Team size', value: '4 developers' },
        { label: 'My role', value: ['Senior Frontend Developer'] },
        { label: 'Company', value: 'Xfive' },
        { label: 'Category', value: ['Web app', 'Commercial'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://staging.openphilology.eu/', url: 'https://staging.openphilology.eu/' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/oplu-editor.png'), alt: 'Editor view screenshot' },
        { src: import('@/assets/portfolio/oplu-witnesses-list.png'), alt: 'Witnesses list view screenshot' },
      ],
      description: 'Web application for the Open Philology that eases the process of translating ancient texts.',
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          reactQuery(),
          styledComponents(),
          jest(),
          eslint(),
          prettier(),
          nodeJs(),
        ],
      },
      links: [
        website({
          url: 'https://openphilology.eu/',
        }),
        demo({
          url: 'https://staging.openphilology.eu/',
        }),
      ],
    },
    {
      name: 'Event app',
      image: import('@/assets/logos/swapcard.jpg'),
      dates: [new Date('2021-07'), null],
      details: [
        { label: 'Team size', value: '15 developers' },
        { label: 'My role', value: ['Senior Frontend Developer'] },
        { label: 'Company', value: 'Swapcard' },
        { label: 'Category', value: ['Web app', 'Mobile app', 'Commercial'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/event-app-1.png'), alt: 'Home view screenshot' },
        { src: import('@/assets/portfolio/event-app-2.webp'), alt: 'Agenda view screenshot' },
      ],
      description: 'All in one event app for event attendees.',
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          styledComponents(),
          storybook(),
          jest(),
          cypress(),
          playwright(),
          apolloGraphql(),
          graphql(),
          nodeJs(),
          eslint(),
          prettier(),
          lerna(),
        ],
      },
      links: [website({ url: 'https://swapcard.com' }), demo({ url: 'https://app.swapcard.com' })],
      pdfDetails: [{ label: 'Demo', value: 'https://app.swapcard.com', url: 'https://app.swapcard.com' }],
    },
    {
      name: 'Studio app',
      image: import('@/assets/logos/swapcard.jpg'),
      dates: [new Date('2021-07'), null],
      details: [
        { label: 'Team size', value: '15 developers' },
        { label: 'My role', value: ['Senior Frontend Developer'] },
        { label: 'Company', value: 'Swapcard' },
        { label: 'Category', value: ['Web app', 'Commercial'] },
      ],
      description: 'Studio app for event organizers.',
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          styledComponents(),
          storybook(),
          jest(),
          apolloGraphql(),
          graphql(),
          eslint(),
          prettier(),
        ],
      },
      screenshots: [{ src: import('@/assets/portfolio/studio.png'), alt: 'Studio app screenshot' }],
      links: [website({ url: 'https://swapcard.com' }), demo({ url: 'https://studio.swapcard.com/' })],
      pdfDetails: [{ label: 'Demo', value: 'https://studio.swapcard.com/', url: 'https://studio.swapcard.com/' }],
    },
    {
      name: 'Symptomate',
      image: import('@/assets/portfolio/symptomate-logo.jpg'),
      dates: [new Date('2020-10'), new Date('2021-07')],
      details: [
        { label: 'Team size', value: '5 developers' },
        { label: 'My role', value: ['Junior Frontend Developer', 'Frontend Developer'] },
        { label: 'Company', value: 'Infermedica' },
        { label: 'Category', value: ['Web app', 'Commercial'] },
      ],
      description:
        'Web app and a registered Class I medical device in the European Union. Symptomate is a medical device regulated by the FDA as a general wellness product in the US.',
      tagsList: {
        title: 'Technologies',
        tags: [vue(), typescript(), angularJs(), django(), sass(), storybook(), jest(), eslint(), prettier()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/symptomate-1.png'), alt: 'Symptomate app screenshot' },
        { src: import('@/assets/portfolio/symptomate-2.png'), alt: 'Symptomate body screenshot' },
        { src: import('@/assets/portfolio/symptomate-3.png'), alt: 'Symptomate report screenshot' },
      ],
      links: [
        website({ url: 'https://symptomate.com/' }),
        demo({ url: 'https://symptomate.com/interview/0' }),
        github({ url: 'https://github.com/infermedica/component-library' }),
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://symptomate.com/interview/0', url: 'https://symptomate.com/interview/0' },
        {
          label: 'GitHub',
          value: 'https://github.com/infermedica/component-library',
          url: 'https://github.com/infermedica/component-library',
        },
      ],
    },
    {
      name: 'CodersCard',
      image: import('@/assets/portfolio/coderscard-logo.png'),
      dates: [new Date('2020-07'), new Date('2021-06')],
      details: [
        { label: 'Team size', value: '11 developers' },
        { label: 'My role', value: ['Frontend Developer', 'Top contributor', 'Lead Developer'] },
        { label: 'Organization', value: 'CodersCrew' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      description: 'CodersCard is a tool that helps developers to create a professional portfolio in minutes.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), gatsby(), nextJs(), typescript(), materialUi(), storybook(), graphql(), eslint(), prettier()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/coderscard-gh.png'), alt: 'CodersCard github screenshot' },
        { src: import('@/assets/portfolio/coderscard-app.png'), alt: 'CodersCard app screenshot' },
      ],
      links: [
        demo({ url: 'https://coders-card.netlify.app/' }),
        github({ url: 'https://github.com/CodersCrew/coders-card' }),
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://coders-card.netlify.app/', url: 'https://coders-card.netlify.app/' },
        {
          label: 'GitHub',
          value: 'https://github.com/CodersCrew/coders-card',
          url: 'https://github.com/CodersCrew/coders-card',
        },
      ],
    },
    {
      name: 'Montelearn',
      image: import('@/assets/portfolio/montelearn-logo.png'),
      dates: [new Date('2020-05'), new Date('2020-07')],
      details: [
        { label: 'Team size', value: '13 developers' },
        { label: 'My role', value: ['Junior Frontend Developer', 'Top contributor'] },
        { label: 'Company', value: 'Monterail' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      description: `
        An open-source platform for creating e-learning apps. While it doesn’t solve the challenge of access to the Internet, it answers to the need of having low-cost, low resource-demanding solutions.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), typescript(), tailwindCss(), jest(), eslint(), prettier()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/montelearn-1.png'), alt: 'Montelearn app screenshot' },
        { src: import('@/assets/portfolio/montelearn-2.png'), alt: 'Montelearn github screenshot' },
      ],
      links: [
        website({ url: 'https://www.monterail.com/blog/montelearn-open-source-platform-e-learning-apps' }),
        github({ url: 'https://github.com/monterail/montelearn' }),
      ],
      pdfDetails: [
        {
          label: 'Article',
          value: 'https://www.monterail.com/blog/montelearn-open-source-platform-e-learning-apps',
          url: 'https://www.monterail.com/blog/montelearn-open-source-platform-e-learning-apps',
        },
        {
          label: 'GitHub',
          value: 'https://github.com/monterail/montelearn',
          url: 'https://github.com/monterail/montelearn',
        },
      ],
    },
    {
      name: 'NativeSpeaker',
      image: import('@/assets/portfolio/nativespeaker-logo.png'),
      dates: [new Date('2019-03'), new Date('2019-07')],
      details: [
        { label: 'Team size', value: '3 developers' },
        { label: 'My role', value: ['Frontend Developer', 'Designer'] },
        { label: 'Category', value: ['Website', 'Web app', 'Freelance', 'Commercial'] },
      ],
      description: `
        NativeSpeaker is a platform that connects people who want to learn a language with native speakers who want to teach it.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [html(), sass(), javascript(), ruby(), rails(), postgreSql()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/nativespeaker-1.png'), alt: 'NativeSpeaker app home screenshot' },
        { src: import('@/assets/portfolio/nativespeaker-2.png'), alt: 'NativeSpeaker app about screenshot' },
      ],
      links: [demo({ url: 'https://nativespeaker.com.pl/' })],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'https://nativespeaker.com.pl/',
          url: 'https://nativespeaker.com.pl/',
        },
      ],
    },
    {
      name: 'Flavortown',
      image: import('@/assets/portfolio/flavortown-logo.png'),
      dates: [new Date('2018-11'), new Date('2018-12')],
      details: [
        { label: 'Team size', value: '1 developers' },
        { label: 'My role', value: ['Frontend Developer'] },

        { label: 'Category', value: ['Website'] },
      ],
      description: `
        Flavortown is my first ever made website.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [html(), css(), javascript()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/flavortown-1.png'), alt: 'Flavortown home screenshot' },
        { src: import('@/assets/portfolio/flavortown-2.png'), alt: 'Flavortown about screenshot' },
      ],
      links: [
        website({ url: 'https://mecies.github.io/my-first-website/' }),
        github({
          url: 'https://github.com/mecies/my-first-website',
        }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
