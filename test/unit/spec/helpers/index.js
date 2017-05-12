const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());
chai.use(sinonChai);

global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;

require('jsdom-global/register');
