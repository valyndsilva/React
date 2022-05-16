import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  // we can pass any actions created through dispatch()
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </section>
  );
}
