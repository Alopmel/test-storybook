import { Tabs } from './Tabs';

export default {
  title: 'Example/Tabs',
  component: Tabs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const currentTabs = {
  args: {
    currentTabs: 1
  },
};