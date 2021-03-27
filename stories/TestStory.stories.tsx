import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ComponentSwitch  from '../src/components/ComponentSwitch';

export default {
  title: 'Component Switch',
  decorators: [
    withKnobs,
    (storyFn: () => React.ReactNode): React.ReactNode => storyFn(),
  ],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const TestTaskStory = () => {
  return <ComponentSwitch />;
};

TestTaskStory.story = {
  name: 'Component Switch',
};
