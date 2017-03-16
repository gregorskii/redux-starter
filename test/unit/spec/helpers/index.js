import chai, { expect, assert } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import 'jsdom-global/register';

chai.use(chaiEnzyme());

global.chai = chai;
global.expect = expect;
global.assert = assert;
