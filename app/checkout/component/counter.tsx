'use client'
import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex items-center justify-between border rounded-full w-20 px-2">  <button
            onClick={increment}
            className=" hover:text-primarygreen2 text-lg"
        >
            +
        </button>

            <div className="mx-4  ">
                <span className=" font-bold">{count}</span>
            </div>
            <button
                onClick={decrement}
                className=" hover:text-primarygreen2 text-lg"
            >
                -
            </button>
        </div>
    );
};

export default Counter;