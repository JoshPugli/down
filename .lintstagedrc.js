import { relative } from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(' --file ')}`;

export default {
  // Run ESLint on JS/TS files
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  // Run Prettier on other file types
  '*.{json,md,css,scss}': ['prettier --write'],
};
