import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { increment, decrement } from './store/counterSlice';

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    );
};

export default Counter;
