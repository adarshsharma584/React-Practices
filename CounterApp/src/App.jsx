import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  decreament,
  resetCount,
  addCountByAmount,
} from "./slices/CounterSlice.jsx";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const handleIncreament = () => {
    dispatch(increament());
  };
  const handledecreament = () => {
    dispatch(decreament());
  };
  const handleReset = () => {
    dispatch(resetCount());
  };
  // const handleAddByAmount = () => {
  // dispatch(addCountByAmount());
  // console.log(" Count Added by Amount ");
  // }

  return (
    <>
      <h1>Counter App</h1>
      {/* Card Component */}
      <div className="counter">
        <div className="counter-card">
          <h1>Count:{count}</h1>
        </div>

        {/* Buttons */}
        <div className="btn-div">
          <button className="button" onClick={handleIncreament}>
            Increment
          </button>
          <button className="button" onClick={handledecreament}>
            Decrement
          </button>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>

        {/* <button className="button">Add By Amount</button> */}
      </div>
    </>
  );
}

export default App;
