// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Cássio Fernando';
export const SITE_LOGO = 'https://avatars.githubusercontent.com/u/61878987';
export const SITE_DESCRIPTION = 'My future personal blog using astro, bun and tailwind!';

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export const isExternal = (str: string) => str.includes(':');

export const daysDiff = (dateA: Date, dateB: Date) => {
  const diff = dateA.getTime() - dateB.getTime();
  const millisecondsInDay = 1000 * 60 * 60 * 24;

  return Math.floor(diff / millisecondsInDay);
}
