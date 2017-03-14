import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import 'jsdom-global/register';

chai.use(chaiEnzyme());

global.chai = chai;
global.expect = expect;
