/* eslint-disable func-names, prefer-arrow-callback */

import Welcome from 'components/welcome';
import {
  renderComponent,
  expect
} from 'test/unit/spec/helpers';

describe('Welcome', function() {
  it('should render text', function() {
    const component = renderComponent(Welcome);

    expect(component).to.contain('Welcome!');
  });
});
