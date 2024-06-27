import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';
import './counter.css'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addvalue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }

    return (
        <section className='counter-section'>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                className='counter-input'
                type='text'
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            >
            </input>

            <div className='counter-button'>
                <button onClick={() => dispatch(incrementByAmount(addvalue))}>AddValue </button>
                <button onClick={resetAll}>Reset</button>

            </div>
        </section>
    );
}

export default Counter;
