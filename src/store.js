import { createStore } from 'redux';
import reducer from './ducks/counter.js';

let store = createStore(reducer);

export default store;
