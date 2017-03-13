/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import App from 'components/app';
import {
  renderComponent,
  expect
} from 'test/unit/spec/helpers';

// Use describe to group similar tests
describe('App', function() {
  // Use 'it' to test a single attribute of a target
  it('should be defined', function() {
    // Use expect to make an assertion about a target
    const component = renderComponent(App);

    expect(component).to.not.be.undefined;
  });
});
