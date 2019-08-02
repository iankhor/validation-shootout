import { configure } from 'enzyme';
import jsdom from 'jsdom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const dom = new jsdom.JSDOM();
global.window = dom.window;
global.document = dom.window.document;

require('mutationobserver-shim');

global.MutationObserver = window.MutationObserver;
