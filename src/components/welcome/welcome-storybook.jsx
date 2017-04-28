import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Welcome from './index.jsx';

const stories = storiesOf('Welcome', module);

stories.addDecorator(getStory => (
  <MemoryRouter>
    { getStory() }
  </MemoryRouter>
));

stories.addDecorator(withKnobs);

stories.add('Welcome', () => {
  return <Welcome welcomeText={text('Text', 'Welcome to Storybook!')} />;
});
