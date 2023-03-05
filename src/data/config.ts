import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Maciej Hnat - Senior Frontend Developer',
    description: `
      Senior Frontend Developer with 4 years of experience building engaging web applications using React and Vue. I specialize in creating user-friendly interfaces, optimizing website performance, and implementing responsive designs. My dedication to continuous learning and improvement ensures high-quality results that exceed client expectations. With leadership experience in managing and mentoring small frontend teams, I am committed to achieving project goals on time and on budget.
    `,
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
