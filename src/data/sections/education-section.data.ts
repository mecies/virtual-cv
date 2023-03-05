import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Business Informatics',
      institution: 'Wroclaw University of Economics',
      image: import('@/assets/logos/ue-wroc.png'),
      dates: [new Date('2017.10'), new Date('2020.07')],
      description: "Bachelor's degree. Specialization in system analysis and design.",
      links: [website({ url: 'http://www.ue.wroc.pl/en/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
