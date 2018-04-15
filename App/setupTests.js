// import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mocks from 'react-native-jest-mocks';

configure({ adapter: new Adapter() });
mocks.initAll();
// Object.defineProperty(document, 'currentScript', {
//   value: document.createElement('script'),
// });
