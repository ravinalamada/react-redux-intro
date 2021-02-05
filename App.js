import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './redux/count';

function App() {
  const count =  useSelector(state => state.count);
  const dispatch = useDispatch()
	return (
    <div>
      <h1>{count}</h1>
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   }
// }

// const mapToDispatch = {
//   increment,
//   decrement,
// }

// export default connect(state =>({count: state.count}) , {increment, decrement})(App)

export default App;
