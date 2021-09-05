import INITIAL_VIEWPORTS from '@storybook/addon-viewport';

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
  screebBase: {
    name: 'Media',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
};


export const parameters = {
  viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

}