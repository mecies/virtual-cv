import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/clean-code.jpeg'),
        title: 'Clean Code',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/3735293-clean-code',
      },
      {
        image: import('@/assets/favorites/books/algorithms.jpg'),
        title: 'Grokking Algorithms',
        author: 'Aditya Bhargava',
        url: 'https://www.goodreads.com/book/show/22847284-grokking-algorithms',
      },
      {
        image: import('@/assets/favorites/books/fundamentals-of-sh.jpeg'),
        title: 'Fundamentals of Software Architecture',
        author: 'Mark Richards and Neal Ford',
        url: 'https://www.goodreads.com/en/book/show/44144493',
      },
      {
        image: import('@/assets/favorites/books/staff-engineers-path.jpeg'),
        title: 'The Staff Engineer’s Path',
        author: 'Tanya Reilly',
        url: 'https://www.goodreads.com/en/book/show/61058107',
      },
      {
        image: import('@/assets/favorites/books/building-micro-frontends.jpeg'),
        title: 'Building Micro-Frontends',
        author: 'Luca Mezzalira',
        url: 'https://www.goodreads.com/book/show/59656687-building-micro-frontends',
      },
      {
        image: import('@/assets/favorites/books/ddd.jpeg'),
        title: 'Learning Domain-Driven Design',
        author: 'Vlad Khononov',
        url: 'https://www.goodreads.com/en/book/show/57573212',
      },
      {
        image: import('@/assets/favorites/books/fullstack-testing.jpeg'),
        title: 'Fullstack Testing',
        author: 'Gayathri Mohan',
        url: 'https://www.goodreads.com/book/show/59891129-full-stack-testing',
      },
      {
        image: import('@/assets/favorites/books/frontend-architecture-design-systems.jpeg'),
        title: 'Frontend Architecture For Design Systems',
        author: 'Micah Godbolt',
        url: 'https://www.goodreads.com/en/book/show/25977680',
      },
    ],
  },

  medias: {
    title: 'Media I follow and People I learn from',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/media-2.jpeg'),
        title: 'Healthy Software Developer',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
      },
      {
        image: import('@/assets/favorites/media/ben-awad.jpg'),
        title: 'Ben Awad',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw',
      },
      {
        image: import('@/assets/favorites/media/clement.jpg'),
        title: 'Clement Mihailescu',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@clem',
      },
      {
        image: import('@/assets/favorites/media/joshua.jpg'),
        title: 'Joshua Fluke',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@joshuaf',
      },
      {
        image: import('@/assets/favorites/media/theo.jpg'),
        title: 'Theo - t3.gg',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@t3dotgg',
      },
      {
        image: import('@/assets/favorites/media/wds.jpg'),
        title: 'Web Dev Simplified',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@WebDevSimplified',
      },
      {
        image: import('@/assets/favorites/media/google-chrome-devs.jpg'),
        title: 'Google Chrome Developers',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@GoogleChromeDevelopers',
      },
      {
        image: import('@/assets/favorites/media/continuous-delivery.jpg'),
        title: 'Continuous Delivery',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@ContinuousDelivery',
      },
      {
        image: import('@/assets/favorites/media/react-status.png'),
        title: 'React Status',
        type: 'Newsletter',
        url: 'https://react.statuscode.com/',
      },
      {
        image: import('@/assets/favorites/media/javascript.png'),
        title: 'JavaScript Weekly',
        type: 'Newsletter',
        url: 'https://javascriptweekly.com/',
      },
      {
        image: import('@/assets/favorites/media/media-4.png'),
        title: 'TypeScript Weekly',
        type: 'Newsletter',
        url: 'https://typescript-weekly.com/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
