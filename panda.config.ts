import {
  defineFusionYouConfig
} from '@tourlane/fusion-you/theme';

export default defineFusionYouConfig({
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],

  hash: true,
  optimize: true,
  minify: true,

  theme: {
    extend: {},
  },
});
