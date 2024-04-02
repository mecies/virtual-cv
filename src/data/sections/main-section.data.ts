import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/og-image.jpeg'),
  fullName: 'Maciej Hnat',
  role: 'Senior Frontend Developer',
  details: [
    { label: 'Phone', value: '+48 500 767 393', url: 'tel:+48 500 767 393' },
    { label: 'Email', value: 'maciekhnat@gmail.com', url: 'mailto:maciekhnat@gmail.com' },
    { label: 'From', value: 'Wroclaw, Poland' },
    { label: 'Contract type', value: 'B2B' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+48 500 767 393' },
    { label: 'Email', value: 'maciekhnat@gmail.com' },
    { label: 'LinkedIn', value: '/in/maciej-hnat/', url: 'https://www.linkedin.com/in/maciej-hnat/' },
    { label: 'GitHub', value: '/mecies', url: 'https://github.com/mecies' },
    { label: 'Website', value: 'https://maciejhnat.dev/', url: 'https://maciejhnat.dev/', fullRow: true },
  ],
  description: `
    Senior Frontend Developer with 5 years of experience building engaging web applications using React and Vue. I specialize in creating user-friendly interfaces, optimizing website performance, and implementing responsive designs. My dedication to continuous learning and improvement ensures high-quality results that exceed client expectations. With leadership experience in managing and mentoring small frontend teams, I am committed to achieving project goals on time and on budget.
  `,
  tags: [
    { name: 'Available for mentoring' },
    { name: 'Open for freelance' },
    { name: 'Open for work in product companies' },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Maciej_Hnat.pdf',
  },
  links: [github({ url: 'https://github.com/mecies' }), linkedin({ url: 'https://www.linkedin.com/in/maciej-hnat/' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
