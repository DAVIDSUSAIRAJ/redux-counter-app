import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./actions";
// import { useSelector, useDispatch } from "react-redux";
// const dispatch = useDispatch();
// const counter = useSelector((state) => state.count);
// let count = 0;
// function counterReducer(state = count, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state.value - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);
// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "increment" });

//  const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

//  const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };
// const reset = () => {
//   return {
//     type: "RESET",
//   };
// };

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="redux--counter">
        <h1>COUNTER : {counter} </h1>
        <button className="increment" onClick={() => dispatch(increment())}>
          PLUS +1
        </button>
        <button className="decrement" onClick={() => dispatch(decrement())}>
          MINUS -1
        </button>
        <button className="reset" onClick={() => dispatch(reset())}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
