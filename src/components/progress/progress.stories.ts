import {StoryObj, Meta} from '@storybook/react';
import Progress from './progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: 'number',
    },
  },
} as Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    progress: 90,
  },
};
