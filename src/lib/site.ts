export const sections = [
  { id: 'works', name: 'Works' },
  { id: 'research', name: 'Research' },
  { id: 'news', name: 'News' },
  { id: 'about', name: 'About' },
];

export const logo = '/branding/niulab-logo.png';

export const newestFirst = <T extends { data: { date: string } }>(items: T[]) =>
  [...items].sort((a, b) => b.data.date.localeCompare(a.data.date));
