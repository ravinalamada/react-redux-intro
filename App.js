import React from 'react';
import store from './redux';
import {increment, decrement} from './redux/count';

function App(props) {
  store.dispatch(increment(3))
  store.dispatch(decrement(2))
	return <div>Cool</div>;
}

export default App;
