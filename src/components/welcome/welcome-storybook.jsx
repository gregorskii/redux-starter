import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Welcome from './index.jsx';

storiesOf('Welcome', module)
  .add('Welcome', () => (
    <Welcome />
  )
);
