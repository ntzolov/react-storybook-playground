import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dataArray: [
      { title: 'Title 1', content: 'Content 1' },
      { title: 'Title 2', content: 'Content 2' },
    ],
  },
};
